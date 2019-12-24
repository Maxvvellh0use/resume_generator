import React from "react";
import ReactDOM from 'react-dom';
import '../Resume.css';

const Checkbox = () => {
        return (
            <div className="hide-email">
                <div className="checkbox">
                    <input id="isEmailHidden" type="checkbox" name="isEmailHidden"
                           value="on" />
                        <label htmlFor="isEmailHidden">Don't show on my resume</label>
                </div>
            </div>
        );
};

export default Checkbox