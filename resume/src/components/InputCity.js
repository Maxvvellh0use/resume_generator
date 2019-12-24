import React from "react";
import ReactDOM from 'react-dom';
import '../Resume.css';

class InputCity extends React.Component {
    render() {
        return (
            <div className="city">
                <div className="form-group">
                    <label className="form-label">City</label>
                    <input id="CITY" className="input-group" type="text" name="CITY"
                           placeholder="" maxLength="50" autoComplete="false" />
                </div>
            </div>
        );
    }
}

export default InputCity