import React from "react";
import ReactDOM from 'react-dom';
import '../Resume.css';

class InputStreet extends React.Component {
    render() {
        return (
            <div className="street">
                <div className="form-group">
                    <label className="form-label">Street adress</label>
                    <input id="STRT" className="input-group" type="text" name="STRT"
                           value="" placeholder="" maxLength="100" autoComplete="false" />
                </div>
            </div>
        );
    }
}

export default InputStreet