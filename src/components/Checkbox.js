import React from "react";
import '../Resume.css';

const Checkbox = () => {
        return (
            <div className="hide-email">
                <div className="checkbox">
                    <input id="isEmailHidden" type="checkbox" name="isEmailHidden"
                           value="on"
                    />
                        <label>
                            Don't show on my resume
                        </label>
                </div>
            </div>
        );
};

export default Checkbox