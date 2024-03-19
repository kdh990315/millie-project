document.addEventListener('DOMContentLoaded', () => {
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