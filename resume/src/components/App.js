import React from 'react';
import ReactDOM from 'react-dom';
import Input from "./Input.js";
import Checkbox from "./Checkbox";
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
                <Input id={'NAME'} className={'input-group'} type={'text'} name={'firstname'} maxLength={'100'} label={'Name'} onChange={this.handleChange}  />
                <Input id={'EMAIL'} className={'input-group'} type={'email'} name={'EMAIL'} maxLength={60} label={'Email'} onChange={this.handleChange} />
                <Checkbox/><br/>
                <Input id={'STRT'} className={'input-group'} type={'text'} name={'STRT'} maxLength={'100'} label={'Street'} onChange={this.handleChange} />
                <Input id={'CITY'} className={'input-group'} type={'text'} name={'CITY'} maxLength={'100'} label={'City'} onChange={this.handleChange}/>
                <Input id={'COUNTRY'} className={'input-group'} type={'text'} name={'COUNTRY'} maxLength={'50'} label={'Country'} onChange={this.handleChange}/>
                <Input id={'NUMB'} className={'input-group'} type={'text'} name={'NUMB'} maxLength={'20'} label={'Phone number'} onChange={this.handleChange} />
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