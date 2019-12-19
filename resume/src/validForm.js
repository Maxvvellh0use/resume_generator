"use strict";
(function () {
    var inputs = document.querySelectorAll('input');
    var btnSave = document.querySelector('#btn');
    var isCheck = function is() {
        var inputsArr;
        inputsArr = Array.from(inputs);
        var filterInp = inputsArr.filter(function (x) { return x.value === ''; });
        var mapFilterInp = filterInp.map(function (x) { return [x.placeholder = 'Заполните это поле', x.className = 'inputError' ]});

    };
    if (btnSave) {
        btnSave.addEventListener("click", isCheck);
    }
})();

