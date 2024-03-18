
document.addEventListener('DOMContentLoaded', () => {
    let footer_button = document.querySelector('#footer_btn'),
        footer_QT = document.querySelector('.footer_QT');

    footer_button.addEventListener('click', () => {
        footer_QT.classList.contains('footer_QT_on') ? footer_QT.classList.remove('footer_QT_on') : footer_QT.classList.add('footer_QT_on');
    })
})