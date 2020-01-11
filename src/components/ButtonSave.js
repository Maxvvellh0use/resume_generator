import React from 'react';
import '../Resume.css';

const ButtonSave = props => {
        return (
            <button className={'button-save'} onClick={props.onClick}>Save and Continue</button>
        )
    };


export default ButtonSave