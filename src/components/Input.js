import React from "react";
import '../Resume.css';

const Input = props => {
        return (
                    <div className="form-group">
                        <label className="form-label">{props.label}</label>
                        <input 
                        id={props.id} 
                        onChange={props.onChange} 
                        className={props.className}    
                        type={props.type} 
                        name={props.name}
                        placeholder="" 
                        maxLength={props.maxLength} />
                    </div>
        );
};

export default Input