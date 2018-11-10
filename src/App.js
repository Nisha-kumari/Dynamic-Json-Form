import React, { Component } from 'react';
import DynamicForm from './components/DynamicForm/DynamicForm';
import './App.css';

class App extends Component {
  onSubmit = (config) => {
    alert(JSON.stringify(config));
}
  render() {
    return (
      <div className="App">
        <DynamicForm 
          title = "Registration Form"
          config = {[
            {key:"name", name: "person_name",label: "Person's name", type: "text"},
            {key: "state", name: "state",label: "Person's state", type: "dropdown", values: ["Bangalore","Mumbai","Delhi"]}
          ]}
          onSubmit ={(config) => {this.onSubmit(config)}}
        />
      </div>
    );
  }
}

export default App;
