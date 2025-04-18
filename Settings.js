/* onload stuff */
function settings() {
    // Apply dark mode preference
    if (localStorage.getItem("mode") == 1) {
        document.getElementById("modeSheet").href = "Theme/dark_mode.css";
    } else {
        document.getElementById("modeSheet").href = "Theme/light_mode.css";
    }

    // Apply font preferences
    if (localStorage.getItem("font") == 'arial') {
        document.getElementById("fontStyle").href = "Fonts/Arial.css";
    }
    if (localStorage.getItem("font") == 'comicSans') {
        document.getElementById("fontStyle").href = "Fonts/ComicSans.css";
    }
    if (localStorage.getItem("font") == 'openSans') {
        document.getElementById("fontStyle").href = "Fonts/OpenSans.css";
    }
    if (localStorage.getItem("font") == 'verdana') {
        document.getElementById("fontStyle").href = "Fonts/Verdana.css";
    }
}

/* button press function */
function darkMode() {
    /* dark mode */
    if (document.getElementById("modeSheet").getAttribute("href") == "Theme/light_mode.css") {
        document.getElementById("modeSheet").href = "Theme/dark_mode.css";
        localStorage.setItem("mode", 1);
    }
    /* light mode */
    else {
        document.getElementById("modeSheet").href = "Theme/light_mode.css";
        localStorage.setItem("mode", 0);
    }
}

/* font buttons */
function changeFont(font) {
    if (font == 'arial') {
        document.getElementById("fontStyle").href = "Fonts/Arial.css";
        localStorage.setItem("font", 'arial');
    }
    if (font == 'comicSans') {
        document.getElementById("fontStyle").href = "Fonts/ComicSans.css";
        localStorage.setItem("font", 'comicSans');
    }
    if (font == 'openSans') {
        document.getElementById("fontStyle").href = "Fonts/OpenSans.css";
        localStorage.setItem("font", 'openSans');
    }
    if (font == 'verdana') {
        document.getElementById("fontStyle").href = "Fonts/Verdana.css";
        localStorage.setItem("font", 'comicSans');
    }
}

/* Font Dropdown menu */
function fontdrop() {
    event.stopPropagation();
    document.getElementById("fontDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
