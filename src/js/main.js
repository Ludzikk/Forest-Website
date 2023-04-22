const mobileBtn = document.querySelector(".nav_hamburger");
const mobileNav = document.querySelector(".nav-mobile");
const mobileLink = document.querySelectorAll(
	".nav-mobile_hamburger-list-item-link"
);
const footerYear = document.querySelector(".footer-text-span")

const showMobileNav = () => {
	mobileNav.classList.toggle("active");
	document.body.classList.toggle("hidden-body");

	mobileLink.forEach((link) => {
		link.addEventListener("click", () => {
			mobileNav.classList.remove("active");
			document.body.classList.remove("hidden-body");
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
mobileBtn.addEventListener("click", showMobileNav);
