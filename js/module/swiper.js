const swiper = () => {
    const dragEls = document.querySelectorAll('.dragEl');
    let isSwiping = false,
        startX, currentX, startScroll;

    dragEls.forEach(dragEl => {
        //마우스를 클릭했을 때의 함수
        dragEl.addEventListener('mousedown', (ev) => {
            isSwiping = true;
            startX = ev.clientX;
            startScroll = dragEl.scrollLeft;
        });

        dragEl.addEventListener('mousemove', (event) => {
            if (!isSwiping) return;
            currentX = event.clientX;
            // 클릭한 위치에서의 이동 거리 계산
            let deltaX = currentX - startX;
            // 현재 스크롤 위치에서 이동 거리를 더한 값으로 스크롤 조정
            dragEl.scrollLeft = startScroll - deltaX;
        });

        //마우스 클릭을 풀었을 때 함수
        dragEl.addEventListener('mouseup', () => {
            isSwiping = false;
        });
    });
}

export default swiper;
