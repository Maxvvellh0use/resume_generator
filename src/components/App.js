import React from 'react';
import '../Resume.css';
import Preview from "./Preview";
import Form from './Form'


class App extends  React.Component {
    render() {
       return  <div>
                <Form/>
                <Preview/>
            </div>
        /*Сабмитить данные из формы в джсон, парсить и вывести в миниатюру*/
         }
}

export default App