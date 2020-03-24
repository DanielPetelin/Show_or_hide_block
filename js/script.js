let modal = document.querySelector('.modal');
let btnHide = document.querySelector('#hide');
let btnShow = document.querySelector('#show');

function show() {
    modal.classList.remove('hide');
    modal.classList.add('show');
};

function hide() {
    modal.classList.remove('show');
    modal.classList.add('hide');
};

document.onkeypress = function (e) {
    if (e.keyCode == 32) {
        modal.classList.remove('show');
        modal.classList.add('hide');
    };
};

btnShow.onclick = show;
btnHide.onclick = hide;