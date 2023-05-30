function openFullscreen(elem, lang) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
    if (lang === 'en') {
        document.getElementById("startGame").innerText = "Resume"
    } else {
        document.getElementById("startGame").innerText = "Riprendi"
    }
}

function goto(link) {
    window.location.replace(link);
}


document.getElementById("embedded-game").setAttribute("height", screen.height)
document.getElementById("embedded-game").setAttribute("width", screen.width)

// Todo -> cookies