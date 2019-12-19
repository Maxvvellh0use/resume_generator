import React from 'react';
import ReactDOM from 'react-dom';
import '../Resume.css';
import ThumbResume from "./ThumbResume";

class ButtonSave extends React.Component {
    render() {
        return <button onClick={ThumbResume} className={'button-save'}>Save and Continue</button>;
    }
}

ReactDOM.render(
    <ButtonSave />,
    document.getElementById('btn')
);