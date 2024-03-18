document.addEventListener('DOMContentLoaded', () => {
    //변수 선언
    let tap = document.querySelectorAll('.tap_btn'),
        tap_on = 'tap_btn_on',
        content = document.querySelectorAll('.content'),
        content_on = 'content_on';

    //class를 지워주기 위한 함수
    const removeOn = () => {
        for(let i = 0; i < tap.length; i++) {
            tap[i].classList.remove(tap_on);
            content[i].classList.remove(content_on);
        }
    }

    //tap메뉴를 클릭할 때 class추가
    tap.forEach((item, index) => {
        item.addEventListener('click', () => {
            removeOn();
            item.classList.add(tap_on);
            content[index].classList.add(content_on);
        });
    })
});