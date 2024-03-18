window.addEventListener('DOMContentLoaded', () => {
	const slogan = document.querySelectorAll('.slogan');

	//페이지가 로드 후 slogan에 class 추가
	for(let i = 0; i < slogan.length; i++) {
		setTimeout(() => {
			slogan[i].classList.add('Loading-on');
		}, 350 * i);
	};

	// 각 요소가 일정 스크롤 값에 도달하면 애니메이션 실행.
	document.addEventListener('scroll',() => {

		let text_wrap = document.querySelectorAll('.text_wrap'),
			text_wrap_on = 'text_wrap_on',
			doc = document.documentElement,
			//현재 스크롤 위치
			scrollPos = doc.scrollTop;

		//title text애니메이션
		text_wrap.forEach((item) => {
			let itemTop = item.offsetTop;

			if(scrollPos >= itemTop - 700 && scrollPos < itemTop + 50) {
				item.classList.add(text_wrap_on);
			} else {
				item.classList.remove(text_wrap_on);
			}
		});

		// 카드 애니메이션
		let card_wrap = document.querySelector('#reading'),
			//card_wrap의 offsetTop 값
			card_wrap_Top = card_wrap.offsetTop,
			//card_wrap의 높이 값
			card_wrap_Height = card_wrap.offsetHeight,
			card = document.querySelectorAll('.card');

		card.forEach((item, index) => {
			let cardAnimationConditional = scrollPos >= card_wrap_Top - card_wrap_Height && scrollPos - card_wrap_Height < card_wrap_Top;
			if(cardAnimationConditional) {
				item.classList.add('card_on');
				item.style.animationDelay = `.${index * 2}s`;
			} else {
				item.classList.remove('card_on');
			}
		});
	});

});