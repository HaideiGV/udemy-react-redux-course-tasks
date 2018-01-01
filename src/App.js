import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import TextInput from './TextInput/TextInput';
import TextValidation from './TextInput/TextValidation';
import CharComponent from './TextInput/CharComponent';

class App extends Component {

  state = {
    users: [
      { id: 1, name: "First user" },
      { id: 2, name: "Second user" },
      { id: 3, name: "Third user" }
    ],
    userListEnable: true,
    inputText: null,
    textLength: null
  }

  toogleUserList = () => this.setState({userListEnable: !this.state.userListEnable});

  upperCaseName = (newValue) => {
    this.setState({
      users: [
        { id: 1, name: "Firstsdasdas user" },
        { id: 2, name: newValue },
        { id: 3, name: "Thirdasdasdas user" }
      ],
      userListEnable: true,
      inputText: null,
      textLength: null
    });
  }

  changeName = (event, id) => {
    const userIndex = this.state.users.findIndex(p => p.id === id);

    const user = {...this.state.users[userIndex]};
    user.name = event.target.value;
    const users = [...this.state.users];

    users[userIndex] = user;
    this.setState({ users: users });
  }

  deleteUser = index => {
    const users = this.state.users;
    users.splice(index, 1);
    this.setState({users: users});
  }

  deleteCharItem = index => {
    const inputText = [...this.state.inputText];
    inputText.splice(index, 1);
    this.setState({inputText: inputText.join('')});
  }

  setTextProps = event => {
    return this.setState({
      textLength: event.target.value.length,
      inputText: event.target.value
    });
  };

  getLengthOfText = () => this.state.textLength;

  textWarningMessage = () => {
    if (this.state.textLength < 5) {
      return <span style={{ color: 'black' }}>Text too short</span>;
    } else if (this.state.textLength < 20) {
      return <span style={{ color: 'green' }}>Good job!</span>;
    } else {
      return <span style={{ color: 'red' }}>Text is too long!</span>;
    }
  }

  changeText = event => this.setState({inputText: event.target.value});

  render() {
    let users = null;

    if ( this.state.userListEnable === true ) {
      users = (
        <div>
          {this.state.users.map((user, index) => {
            return <UserOutput
              key={user.id}
              name={user.name}
              click={() => this.deleteUser(index)}
              changed={(event) => this.changeName(event, user.id)}
            />
          })}
        </div>
      )
    };

    let charList = null;

    if ( this.state.inputText !== null ) {
      charList = (
        <div>
          {[...this.state.inputText].map((char, index) => {
              return <CharComponent key={index} charItem={char} click={() => this.deleteCharItem(index)} />
          })}
        </div>
      )
    };

    return (
      <div className="App">
        <hr />
        <h1> Lesson 2 </h1>
        <TextInput changed={(event) => this.setTextProps(event)} value={this.state.inputText} />
        <TextValidation textLength={this.state.textLength} message={this.textWarningMessage()}/>
        {charList}
        <hr />
        <h1> Lesson 1 </h1>
        <UserInput changed={this.changeName} />
        <button onClick={this.upperCaseName.bind(this, "New 3 name")}>Click</button>
        <button onClick={this.toogleUserList}>Hide users</button>
        {users}
      </div>
    );
  }
}

export default App;
