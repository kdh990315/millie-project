document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelectorAll('.btn'),
        item_box = document.querySelectorAll('.item_box_wrap');

        const removeOn = () => {
            for(let i= 0;  i < btn.length; i++) {
                btn[i].classList.remove('btn_on');
                item_box[i].classList.remove('item_box_on');
            }
        }

        btn.forEach((item, index) => {
            item.addEventListener('click', () => {
                removeOn();
                if(!item.classList.contains('btn_on')) {
                    item.classList.add('btn_on');
                }
                item_box[index].classList.add('item_box_on');
            });
        });
});