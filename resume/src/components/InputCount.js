import React from "react";
import ReactDOM from 'react-dom';
import '../Resume.css';

class InputCount extends React.Component {
    render() {
        return (
            <div className="country">
                <div className="form-group">
                    <label className="form-label">Country</label>
                    <input id="COUNTRY" className="input-group" type="text" name="COUNTRY"
                           value="" placeholder="" maxLength="50" autoComplete="false" />
                </div>
            </div>
        );
    }
}

export default InputCount