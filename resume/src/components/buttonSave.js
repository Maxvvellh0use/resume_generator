import React from 'react';
import ReactDOM from 'react-dom';
import '../Resume.css';
import ThumbResume from "./ThumbResume";
import App from './App'




const ButtonSave = props => {
        return (
            <button className={'button-save'} onClick={props.onClick} type={'button'} >Save and Continue</button>
        )
    };

export default ButtonSave