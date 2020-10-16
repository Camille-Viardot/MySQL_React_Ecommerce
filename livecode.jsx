import React from 'react';
import { connect } from "react-redux"
import { incremente, decremente, changeName, addTodo } from "./store/action/counter";
import { changeUserName, changeAge } from "./store/action/user"
import FormPart from "./components/FormPart"
import TodoList from "./components/TodoList"

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      todo: "",
      username: "",
      age: 0 
    };
  }
  
  componentDidMount() {
    this.setState({
      name: this.props.name,
      username: this.props.userName,
      age: this.props.monAge
    });
  }

  add = () => {
    this.props.incremente();
  };
  less = () => {
    this.props.decremente();
  };

  onAllChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  saveName = () => {
    this.props.changeName(this.state.name);
  };

  saveUserName = () => {
    this.props.changeUserName(this.state.userName);
  };

  saveTodo = () => {
    this.props.addTodo(this.state.todo);
  };

  saveAge = () => {
    this.props.changeAge(this.state.age);
  }

  render() {

    const tab = [
      {
        type: "text",
        value: this.state.name,
        fctClick: this.saveName,
        buttonSentence: "SAVE NAME",
        id: "name",
      },
      {
        type: "text",
        value: this.state.todo,
        fctClick: this.saveTodo,
        buttonSentence: "SAVE TODO",
        id: "todo",
      },
      {
        type: "text",
        value: this.state.username,
        fctClick: this.saveUserName,
        buttonSentence: "SAVE USER NAME",
        id: "username",
      },
      {
        type: "number",
        value: this.state.age,
        fctClick: this.saveAge,
        buttonSentence: "SAVE AGE",
        id: "age",
      },
    ];
    return (
      <div className="App">
        <p>
          Bonjour {this.props.name} - {this.props.counter} - {this.props.monAge}
        </p>
        <button onClick={this.add.bind(this)}>ADDDDDDD</button>
        <button onClick={this.less.bind(this)}>ONE LESS PLS</button>
        <p></p>
        {tab.map(elem => {
          return (
            <div key={elem.id}>
              <FormPart
                id={elem.id}
                type={elem.type}
                value={elem.value}
                fct={this.onAllChange}
                fctClick={elem.fctClick}
                buttonSentence={elem.buttonSentence}
              ></FormPart>
              <p></p>
            </div>
          );
        })}
        <TodoList list={this.props.todos}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer.counter,
  name: state.counterReducer.name,
  monAge: state.userReducer.age,
  userName: state.userReducer.name,
  todos: state.counterReducer.todos,
});

const mapDispatchToProps = {
  incremente,
  decremente,
  changeName,
  addTodo,
  changeUserName,
  changeAge
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
