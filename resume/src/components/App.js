import React from 'react';
import ReactDOM from 'react-dom';
import InputName from "./InputName.js";
import InputEmail from "./InputEmail";
import InputStreet from "./InputStreet";
import InputCity from "./InputCity";
import InputCount from "./InputCount";
import InputNumb from "./InputNumb";
import '../Resume.css';
import ButtonSave from "./buttonSave";
import Preview from "./Preview";

class App extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    render() {
       return <form className={'resume'} >
              <section id="form" className={"content-page"}>
                <h1 id="headline-form" className="headline-text-center">
                    Тут типа реакт
                </h1>
                <p className="subheadline-text-center">
                    With this info, recruiters will be able to find you.
                </p>
                <InputName onChange={this.handleChange}  />
                <InputEmail onChange={this.handleChange} />
                <InputStreet onChange={this.handleChange} />
                <InputCity onChange={this.handleChange}/>
                <InputCount onChange={this.handleChange}/>
                <InputNumb onChange={this.handleChange} />
                <ButtonSave onClick={this.handleSubmit} />
            </section>
            <Preview />
        </form>
    }

}

ReactDOM.render((
    <App/>
), document.getElementById('root'));

export default App