const mobileBtn = document.querySelector(".nav_hamburger");
const mobileNav = document.querySelector(".nav-mobile");
const mobileLink = document.querySelectorAll(
	".nav-mobile_hamburger-list-item-link"
);

const footerYear = document.querySelector(".footer-text-span")

const nav = document.querySelector(".nav")
const section = document.querySelectorAll(".scrollspy")
const navLinks = document.querySelectorAll(".nav_list-item-link")

const showMobileNav = () => {
	mobileNav.classList.toggle("active");
	document.body.classList.toggle("hidden-body");
	mobileBtn.classList.toggle("is-active")

	mobileLink.forEach((link) => {
		link.addEventListener("click", () => {
			mobileNav.classList.remove("active");
			document.body.classList.remove("hidden-body");
			mobileBtn.classList.remove("is-active")
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const changeColor = () => {
	if(scrollY > 5) {
		nav.classList.add("dark")
	} else {
		nav.classList.remove("dark")
	}
}

window.onscroll = () => {
	section.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id")

		if(top >= offset && top < offset + height ) {
			navLinks.forEach(links => {
				links.parentElement.classList.remove("scrollspy-active")
				links.classList.remove("scrollspy-active-item")
				document.querySelector(".nav_list-item-link[href*=" + id + "]").parentElement.classList.add("scrollspy-active")
				document.querySelector(".nav_list-item-link[href*=" + id + "]").classList.add("scrollspy-active-item")
			})
		}
	})
}

handleCurrentYear();
mobileBtn.addEventListener("click", showMobileNav);
window.document.addEventListener("scroll", changeColor)

