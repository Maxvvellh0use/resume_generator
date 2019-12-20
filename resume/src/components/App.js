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

ReactDOM.render((

    <form className={'resume'}>
        <section id="form" className={"content-page"}>
            <h1 id="headline-form" className="headline-text-center">
                Тут типа реакт
            </h1>
            <p className="subheadline-text-center">
                With this info, recruiters will be able to find you.
            </p>
            <InputName />
            <InputEmail />
            <InputStreet />
            <InputCity />
            <InputCount />
            <InputNumb />
            <ButtonSave />
        </section>
        <Preview />
    </form>


), document.getElementById('root'));
