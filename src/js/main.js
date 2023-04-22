const mobileBtn = document.querySelector(".nav_hamburger");
const mobileNav = document.querySelector(".nav_hamburger-listbox");
const mobileLink = document.querySelectorAll(
	".nav_hamburger-listbox-list-item-link"
);

const showMobileNav = () => {
	mobileNav.classList.toggle("active");
    document.body.classList.add("hidden-body")
	
    mobileLink.forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            document.body.classList.remove("hidden-body")
        })
    })
};

mobileBtn.addEventListener("click", showMobileNav);
