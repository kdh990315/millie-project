document.addEventListener("DOMContentLoaded", () => {
	let logo = document.getElementById("logo"),
		docu = document.documentElement,
		scrollPos;

	window.addEventListener("scroll", () => {
		scrollPos = docu.scrollTop;
		logo.style.background = (scrollPos > 750) ? "left / contain no-repeat url(./img/simple-logo.png)" : "left / contain no-repeat url(./img/full_logo.png)";
	});
});