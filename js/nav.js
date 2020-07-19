const navbutton = document.getElementById("nav-button")
const navbar = document.getElementById("navbar")
const navbarclose = document.getElementById("navbar-close")

navbutton.addEventListener("click",()=>{
    navbar.classList.add("open-navbar")
})
navbarclose.addEventListener("click",()=>{
    navbar.classList.remove("open-navbar")
})