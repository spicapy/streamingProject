const darkMode = document.querySelectorAll(".dark-mode")

var x

for(x = 0; x < darkMode.length; x++) {
    darkMode[x].addEventListener("click", () => {

        var i;

        var main = document.querySelector(".main")
        main.classList.toggle("main-dark")

        var toggleDarkMode = document.querySelectorAll(".toggle-btn")
        for(i = 0; i < toggleDarkMode.length; i++) {
            toggleDarkMode[i].classList.toggle("activate")
        }
    
        var navDark = document.querySelector(".nav")
        navDark.classList.toggle("background-dark")
        navDark.classList.toggle("box-shadow-dark")
    
        var logoDark = document.querySelectorAll(".logo")
        for(i = 0; i < logoDark.length; i++) {
            logoDark[i].classList.toggle("logo-dark")
        }
    
        var linksDark = document.querySelectorAll(".links")
        for(i = 0; i < linksDark.length; i++) {
            linksDark[i].classList.toggle("text-light")
        }
    
        var iconsDark = document.querySelectorAll(".icons-navbar")
        for(i = 0; i < iconsDark.length; i++) {
            iconsDark[i].classList.toggle("text-light")
        }
    
        var loginDark = document.querySelector(".login-btn")
        loginDark.classList.toggle("background-light")
        loginDark.classList.toggle("text-dark")
        loginDark.classList.toggle("btn-login")
    
        var configToggle = document.querySelector(".config-toggle")
            configToggle.classList.toggle("background-light")
    
        var settings = document.querySelector(".settings")
        settings.classList.toggle("text-dark")
    
        var darkModeIcon = document.querySelector(".dark-mode-icon")
        darkModeIcon.classList.toggle("background-light")
        darkModeIcon.classList.toggle("text-dark")
    
        var dropdownDark = document.querySelector(".dropdown")
        dropdownDark.classList.toggle("background-dark")
    
        var rowDark = document.querySelector(".dark-mode")
        rowDark.classList.toggle("row-dropdown-dark")

        var lines = document.querySelectorAll(".lines")
        for(i = 0; i < lines.length; i++) {
            lines[i].classList.toggle("background-dark")
        }

        var menuH = document.querySelector(".menu-h")
        menuH.classList.toggle("background-light")

        var rowMenuH = document.querySelectorAll(".row-menu-h")
        for(i = 0; i < rowMenuH.length; i++) {
            rowMenuH[i].classList.toggle("border-color-dark")
        }

        var iconsMenuH = document.querySelectorAll(".icons-menu-h")
        for(i = 0; i < iconsMenuH.length; i++) {
            iconsMenuH[i].classList.toggle("text-dark")
        }

        var linksMenuH = document.querySelectorAll(".links-menu-h")
        for(i = 0; i < linksMenuH.length; i++) {
            linksMenuH[i].classList.toggle("text-dark")
        }
    
        var textDark = document.querySelector(".dark-mode-text")
        textDark.classList.toggle("text-light")

        var imgAnime = document.querySelectorAll(".img-anime")
        for(i = 0; i < imgAnime.length; i++) {
            imgAnime[i].classList.toggle("background-dark")
        }

        var titleAnime = document.querySelectorAll(".title-anime")
        for(i = 0; i < titleAnime.length; i++) {
            titleAnime[i].classList.toggle("text-light")
        }
    
        var footer = document.querySelector(".footer")
        footer.classList.toggle("background-dark")
    
        var textEnterprise = document.querySelectorAll(".text-enterprise")
        for(i = 0; i < textEnterprise.length; i++) {
            textEnterprise[i].classList.toggle("text-light")
        }
    
        var linksFooter = document.querySelectorAll(".links-footer")
        for(i = 0; i < linksFooter.length; i++) {
            linksFooter[i].classList.toggle("text-light")
        }
    
        var mediaFooter = document.querySelectorAll(".media-footer")
        for(i = 0; i < mediaFooter.length; i++) {
            mediaFooter[i].classList.toggle("media-footer-dark")
        }
    
        var textFooter = document.querySelectorAll(".text-footer")
        for(i = 0; i < textFooter.length; i++) {
            textFooter[i].classList.toggle("text-light")
        }
    })
}

