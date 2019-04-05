import React from 'react';

class Form extends React.Component {



    render() {
        return (
            // <p>....</p>
        <div>
            <input type="text" id="name" 
                    onChange={(e) => {this.props.onInput('name', this.props.index, e.target.value)}} >
            </input>
            <input type="text" id="designation" 
                onChange={(e) => {this.props.onInput('designation', this.props.index, e.target.value)}} >
            </input>
        </div>
        )
    }
}

export default Form;
