import React from 'react';
import ReactDOM from 'react-dom';
import './DynamicForm.css';

export default class DynamicForm extends React.Component {
    constructor(props){
        super(props);
        
    }
    state = {
        inputValue: '',  
        selectValue: '',
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.props.onSubmit)
        this.props.onSubmit(this.state);
    }

    onChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
    }
    handleChange = (e) => {
        this.setState({
            selectValue: e.target.value,
        })
    }
   
    render() {
        const {title,config,onSubmit} = this.props; 
        return (
            <div className="form">
                <h1 className="title">{title}</h1>
                <form className="formWrapper" onSubmit={(e)=> {this.onSubmit(e)}}>
                   { config.map((items)=> (
                       <div className="info">
                            <label className="formLabel">{items.label}</label>
                           {(items.type == 'text') ? 
                           <input 
                           className="inputBox"
                           value={this.state.inputValue}
                           key={items.key} 
                           type={items.type}
                           onChange={(e) => {this.onChange(e)}}
                            /> :
                            <select 
                            className="inputBox"
                            key={items.key} 
                            name={items.name}
                            value={this.state.selectValue}
                            onChange={(e) => {this.handleChange(e)}}
                            >
                                {items.values.map(i => (
                                        <option value={i} >{i}</option>
                                ))}
                            </select>} 
                       </div>
                       
                    ))
                   }
                   <div className="buttonWrapper">
                    <button type="submit" className="submitButton">Submit</button>
                   </div>
                   
                </form>
            </div>
        );
    }
} 
