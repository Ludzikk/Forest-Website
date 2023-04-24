const mobileBtn = document.querySelector(".nav_hamburger");
const mobileNav = document.querySelector(".nav-mobile");
const mobileLink = document.querySelectorAll(
	".nav-mobile_hamburger-list-item-link"
);
const footerYear = document.querySelector(".footer-text-span")
const nav = document.querySelector(".nav")

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

handleCurrentYear();
mobileBtn.addEventListener("click", showMobileNav);
window.document.addEventListener("scroll", changeColor)

