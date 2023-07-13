//Анимация

function rotate() {
    if (window.innerWidth < 1400) {
        document.querySelector('.main__bg-ring').classList.remove('rotate');
    } else {
        document.querySelector('.main__bg-ring').classList.add('rotate');
    }
};
