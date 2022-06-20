window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var a = document.getElementsByTagName('#navbar-link');
var sticky = navbar.offsetTop;


function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        for (var i = 0; i < a.length; i++) {
            a[i].classList.add("sticky-nav-link");
            a[i].classList.remove("navbar-link");
        }    
    } else {
        navbar.classList.remove("sticky");
        for (var i = 0; i < a.length; i++) {
            a[i].classList.remove("sticky-nav-link");
            a[i].classList.add("navbar-link");
        }
    }
}