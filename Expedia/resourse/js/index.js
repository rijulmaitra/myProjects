window.onscroll = function () {
    let navbar = document.getElementById("navbar");

    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};