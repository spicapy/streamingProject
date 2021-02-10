const iconMenuH = document.querySelector(".icon-menu-h")

iconMenuH.addEventListener('click', () => {
    iconMenuH.classList.toggle("icon-menu-animation")

    var menuH = document.querySelector(".menu-h")
    menuH.classList.toggle("menu-h-animation")

    var navBarMenuH = document.querySelector(".navbar-menu-h")
    navBarMenuH.classList.toggle("navbar-menu-h-animation")
})

const settings = document.querySelector(".settings")

settings.addEventListener('click', () => {
    settings.classList.toggle("settings-rotate")

    var dropdown = document.querySelector(".dropdown")
    dropdown.classList.toggle("dropdown-animation")
})