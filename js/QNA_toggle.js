document.addEventListener('DOMContentLoaded', () => {
    let contents = document.querySelectorAll('.QNA_contents'),
        contexts_on = 'QNA_on';

    contents.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.contains(contexts_on) ? item.classList.remove(contexts_on) : item.classList.add(contexts_on);
        });
    });
});