import React from "react";
import ReactDOM from 'react-dom';
import '../Resume.css';

class InputNumb extends React.Component {
    render() {
        return (
            <div className="phone-number">
                <div className="form-group">
                    <label className="phone-number">Phone number</label>
                    <input id="NUMB" className="input-group" type="text" name="NUMB"
                           value="" placeholder="" maxLength="20" autoComplete="true"
                           data-validate="true"/>
                </div>
            </div>
        );
    }
}

export default InputNumb