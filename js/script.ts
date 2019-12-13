

(() => {

    const inputs  = document.querySelectorAll('input');
    let btnSave = document.querySelector('#btnSave');

    const isCheck = function is() {
        interface ArrayConstructor {
            from(inputs: any): Array<any>;
        }

        let inputsArr: any[];
        inputsArr = Array.from(inputs);
        console.log(inputsArr);
        let filterInp = inputsArr.filter(x => x.value === '');
        let mapFilterInp = filterInp.map(x => [x.placeholder = 'Заполните это поле', x.className = 'inputError' ])
    };

    if (btnSave) {
        btnSave.addEventListener("click", isCheck);
    }

    else if () {

    }


})();




