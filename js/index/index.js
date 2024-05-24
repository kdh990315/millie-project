document.addEventListener('DOMContentLoaded', () => {
	//scroll animation
	const slogan = document.querySelectorAll('.slogan');

	//페이지가 로드 후 slogan에 class 추가
	for (let i = 0; i < slogan.length; i++) {
		setTimeout(() => {
			slogan[i].classList.add('Loading-on');
		}, 350 * i);
	};

	// 각 요소가 일정 스크롤 값에 도달하면 애니메이션 실행.
	document.addEventListener('scroll', () => {

		let text_wrap = document.querySelectorAll('.text_wrap'),
			text_wrap_on = 'text_wrap_on',
			doc = document.documentElement,
			//현재 스크롤 위치
			scrollPos = doc.scrollTop;

		//title text애니메이션
		text_wrap.forEach((item) => {
			let itemTop = item.offsetTop;

			if (scrollPos >= itemTop - 700 && scrollPos < itemTop + 50) {
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
			if (cardAnimationConditional) {
				item.classList.add('card_on');
				item.style.animationDelay = `.${index * 2}s`;
			} else {
				item.classList.remove('card_on');
			}
		});
	});
	//scroll animation

	//TapMenu
	let btn = document.querySelectorAll('.btn'),
		item_box = document.querySelectorAll('.item_box_wrap');

	const removeOn = () => {
		for (let i = 0; i < btn.length; i++) {
			btn[i].classList.remove('btn_on');
			item_box[i].classList.remove('item_box_on');
		}
	}

	btn.forEach((item, index) => {
		item.addEventListener('click', () => {
			removeOn();
			if (!item.classList.contains('btn_on')) {
				item.classList.add('btn_on');
			}
			item_box[index].classList.add('item_box_on');
		});
	});
	//TapMenu

	//오디오북

	//변수 선언
	const tap = document.querySelectorAll('.tap_btn'),
		tap_on = 'tap_btn_on',
		content = document.querySelectorAll('.content'),
		content_on = 'content_on';

	//class를 지워주기 위한 함수
	const AudioTapRemoveOn = () => {
		for (let i = 0; i < tap.length; i++) {
			tap[i].classList.remove(tap_on);
			content[i].classList.remove(content_on);
		}
	}

	//tap메뉴를 클릭할 때 class추가
	tap.forEach((item, index) => {
		item.addEventListener('click', () => {
			AudioTapRemoveOn();
			item.classList.add(tap_on);
			content[index].classList.add(content_on);
		});
	})

	//변수선언
	const containers = document.querySelectorAll('.slider_container');
	const btn_box_wrap = document.querySelectorAll('.slide_btn_wrap');

	// containers 각각의 자식요소의 수만큼 가로 길이를 설정
	containers.forEach(container => {
			const slides = container.querySelectorAll('.slide');
			container.style.width = `${320 * slides.length}px`;
	});

	btn_box_wrap.forEach((btnWrap, wrapIndex) => {
			const btns = btnWrap.querySelectorAll('.slide_btn');
			const btnTexts = btnWrap.querySelectorAll('.slide_text_info');

			btns.forEach((btn, btnIndex) => {
					btn.addEventListener('click', (ev) => {
							ev.preventDefault();

							btns.forEach((btn, idx) => {
									btn.classList.toggle('slide_btn_on', idx === btnIndex);
									btnTexts[idx].classList.toggle('text_on', idx === btnIndex);
							});

							indexValue(btnIndex);
					});
			});

			// slide의 좌우 움직임.(btn을 클릭했을 때 함수 실행.)
			const indexValue = (btnIndex) => {
					containers[wrapIndex].style.transform = `translateX(${-320 * btnIndex}px)`;
			};
	});
	//오디오북

	//QNA Toggle
	let contents = document.querySelectorAll('.QNA_contents'),
		contents_on = 'QNA_on';

	contents.forEach((item) => {
		item.addEventListener('click', () => {
			item.classList.toggle(contents_on);
		});
	});
	//contains(contexts_on) ? item.classList.remove(contexts_on) : item.classList.add(contexts_on);
	//QNA Toggle

	//video 재생
	const videoBtn = document.querySelector('.play_btn');
	const video = document.querySelector('.review_video');

	videoBtn.addEventListener('click', () => {
		let src = video.getAttribute('src');
		src += '?autoplay=1&mute=1';
		video.setAttribute('src', src);
		video.style.display = 'block';
	});
	//video 재생

		//header 고정
		let logo = document.getElementById("logo"),
		docu = document.documentElement,
		scrollPos;

	window.addEventListener("scroll", () => {
		scrollPos = docu.scrollTop;
		logo.style.background = (scrollPos > 750) ? "left / contain no-repeat url(./img/simple-logo.png)" : "left / contain no-repeat url(./img/full_logo.png)";
	});
	//header 고정

	//footer click event
	let footer_button = document.querySelector('#footer_btn'),
		footer_QT = document.querySelector('.footer_QT');

	footer_button.addEventListener('click', () => {
		footer_QT.classList.contains('footer_QT_on') ? footer_QT.classList.remove('footer_QT_on') : footer_QT.classList.add('footer_QT_on');
	})
	//footer click event
})