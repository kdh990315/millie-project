const subScript = () => {

	const nav = document.querySelectorAll(".nav");
	const btnWrap = document.querySelector(".main_detail_btn");
	const sections = [
		{ start: 1412, end: 3570, navIndex: 0 },
		{ start: 3570, end: 4060, navIndex: 1 },
		{ start: 4060, end: 4560, navIndex: 2 },
		{ start: 4560, end: Infinity, navIndex: 3 }
	];

	document.addEventListener("scroll", function () {
		const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

		btnWrap.classList.toggle("detail_btn_on", scrollPos > 1371);

		sections.forEach(section => {
			if (scrollPos >= section.start && scrollPos < section.end) {
				nav.forEach((item, index) => {
					item.classList.toggle("on", index === section.navIndex);
				});
			}
		});
	});

	//서브 슬라이드 애니메이션
	let sliderContainer = document.getElementsByClassName("slide_wrap"),
		slides = document.getElementsByClassName("slide"),
		navPrev = document.getElementById('prev'),
		navNext = document.getElementById('next'),
		slideCount = slides.length,
		visibleSlide = 6,
		currentIndex = 0;

	//slides가 있으면 가로로 배열하기
	for (let i = 0; i < slideCount; i++) {
		slides[i].style.left = i * 150 + 'px';
	}

	//버튼 누르면 할 일
	function goTo(index) {
		sliderContainer[0].style.left = -150 * index + 'px';
		currentIndex = index;
	}


	//다음버튼
	navNext.addEventListener("click", function (ev) {
		ev.preventDefault();

		if (currentIndex < slideCount - visibleSlide) {
			goTo(currentIndex + 1);
		} else {
			goTo(0);
		}
	});

	//이전 버튼
	navPrev.addEventListener("click", function (ev) {
		ev.preventDefault();

		if (currentIndex > 0) {
			goTo(currentIndex - 1);
		} else {
			goTo(slideCount - visibleSlide);
		}
	});

}

export default subScript;