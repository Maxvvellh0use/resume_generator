import React from "react";
import ReactDOM from 'react-dom';
import '../Resume.css';

class InputEmail extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label className="form-label">Name</label>
                <input id="NAME" onChange="" className="input-group" type="text" name="firstname"
                        placeholder="" maxLength="100" data-validate="true"
                       autoComplete="true" />
                <span className="error-message">Can we get your name?</span>
            </div>
        );
    }
}

export default InputEmail