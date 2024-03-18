document.addEventListener("DOMContentLoaded", function () {
	var nav = document.getElementsByClassName("nav"),
		scrollPos = 0,
		docu = document.documentElement,
		btn_wrap = document.getElementsByClassName("main_detail_btn");

		document.addEventListener("scroll", function () {
			scrollPos = docu.scrollTop;
			console.log(scrollPos)

			// btn_wrap[0].className = (scrollPos > 1370) ? "detail_btn_on" : "";
			if(scrollPos > 1371) {
				btn_wrap[0].classList.add("detail_btn_on");
			} else {
				btn_wrap[0].classList.remove("detail_btn_on");
			}

			if (scrollPos > 1412) {
				nav[0].classList.add("on");
				nav[1].classList.remove("on");
				nav[2].classList.remove("on");
				nav[3].classList.remove("on");
			} 
			if (scrollPos > 3570) {
				nav[0].classList.remove("on");
				nav[1].classList.add("on");
				nav[2].classList.remove("on");
				nav[3].classList.remove("on");
			}
			if (scrollPos > 4060) {
				nav[0].classList.remove("on");
				nav[1].classList.remove("on");
				nav[2].classList.add("on");
				nav[3].classList.remove("on");
			}
			if (scrollPos > 4560) {
				nav[0].classList.remove("on");
				nav[1].classList.remove("on");
				nav[2].classList.remove("on");
				nav[3].classList.add("on");
			}
		});
});