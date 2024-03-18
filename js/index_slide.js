document.addEventListener('DOMContentLoaded', () => {
	//변수선언
	let containers = document.querySelectorAll('.slider_container');
	let btn_box_wrap = document.querySelectorAll('.slide_btn_wrap');

	//containers 각각의 자식요소의 수만큼 가로 길이를 설정
	containers.forEach((item) => {
		item.style.width = `${320 * item.querySelectorAll('.slide').length}px`
	});

	btn_box_wrap.forEach((item, index) => {
		let btn = item.querySelectorAll('.slide_btn');
		let btn_text = item.querySelectorAll('.slide_text_info');

		btn.forEach((item, index) => {
			item.addEventListener('click', (ev) => {
				ev.preventDefault();

				for(let i = 0; i < btn.length; i++) {
					btn[i].classList.remove('slide_btn_on');
					btn_text[i].classList.remove('text_on');
				}

				btn[index].classList.add('slide_btn_on');
				btn_text[index].classList.add('text_on');

				indexValue(index);
			});
		});

		//slide의 좌우 움직임.(btn을 클릭했을 때 함수 실행.)
		const indexValue = (btnIndex) => {
			containers[index].style.left = `${-320 * btnIndex}px`;
		}
	});
});