var navbar = document.getElementById("navbar");
var navSpace = document.getElementById("nav-space");
var a = document.getElementsByTagName('#navbar-link');
let sticky;

window.onresize = () => {
    sticky = navbar.offsetTop
}

sticky = navbar.offsetTop

window.onscroll = function() {myFunction()};

console.log(navbar);
console.log(sticky);


function myFunction() {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > sticky) {
        navSpace.style.display = "block";
        navbar.classList.add("sticky")
        for (var i = 0; i < a.length; i++) {
            a[i].classList.add("sticky-nav-link");
            a[i].classList.remove("navbar-link");
        }    
    } else {
        navSpace.style.display = "none";
        navbar.classList.remove("sticky");
        for (var i = 0; i < a.length; i++) {
            a[i].classList.remove("sticky-nav-link");
            a[i].classList.add("navbar-link");
        }
    }
}