import React from "react";
import ReactDOM from 'react-dom';
import '../Resume.css';


const InputEmail = props => {
        return (
            <div className="form-group">
                <label className="form-label">Email</label>
                <input id="EMAIL" onChange={props.handleChange} className="input-group" type="text" name="email"
                        placeholder="" maxLength="100" data-validatbie="true"
                       autoComplete="true" />
                <span className="error-message">Can we get your name?</span>
            </div>
        );
};

export default InputEmail