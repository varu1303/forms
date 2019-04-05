import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './form';
import { SlowBuffer } from 'buffer';

class App extends Component {

  state = {
    forms: [{name: '', designation: ''}]
  }

  onInput = (id, index, value) => {
    let forms = [...this.state.forms];

    forms[index][id] = value;

    this.setState({forms});
  }

  onPlus = () => {
    let forms = [...this.state.forms];

    forms.push({name: '', designation: ''});

    this.setState({forms});
  }

  printJson = () => {
    console.log(this.state.forms);
  }


  render() {
    return (
      <div className="App">
         {this.state.forms.map((f, i) => {
           return (
             <Form key={i} onInput={this.onInput} index={i}  />
           )
         })}

         <button onClick={this.onPlus}>Add Form</button>
         <button onClick={this.printJson}>Submit Form</button>
      </div>
    );
  }
}

export default App;
