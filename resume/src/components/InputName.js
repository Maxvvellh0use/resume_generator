import React from "react";
import ReactDOM from 'react-dom';
import '../Resume.css';

const InputName = props => {
        return (
            <div className="form-group">
                <label className="form-label">Name</label>
                <input id="EMAIL" onChange="" className="input-group" type="email" name="email"
                        placeholder="" maxLength="60" data-validate="true"
                       autoComplete="true" />
                <span className="error-message">Can we get your name?</span>
            </div>
        );
};

export default InputName