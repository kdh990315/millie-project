document.addEventListener("DOMContentLoaded", function () {
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

			if(currentIndex < slideCount - visibleSlide) {
				goTo(currentIndex + 1);
			} else {
				goTo(0);
			}
		});
		
		//이전 버튼
		navPrev.addEventListener("click", function (ev) {
			ev.preventDefault();

			if(currentIndex > 0) {
				goTo(currentIndex - 1);
			} else {
				goTo(slideCount - visibleSlide);
			}
		});
});