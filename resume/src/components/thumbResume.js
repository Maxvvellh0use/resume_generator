import React from 'react';
import ReactDOM from 'react-dom';
import '../Resume.css';


class ThumbResume extends React.Component {
    constructor(props) {
        super(props);
        const btnSave = document.getElementById('btnSave');
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render() {
        return (
            <div className='pdf-paper'>
                <h1>{document.getElementById('NAME').value}</h1>
                    <div className={'thumb-resume'}>
                        <span>{document.getElementById('EMAIL').value}</span><br/>
                        <span>{document.getElementById('STRT').value}</span><br/>
                        <span>{document.getElementById('CITY').value}</span><br/>
                        <span>{document.getElementById('COUNTRY').value}</span><br/>
                        <span>{document.getElementById('NUMB').value}</span>
                    </div>
            </div>
        );
    }
}



export default ThumbResume