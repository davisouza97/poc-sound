let soundsName = [ 'aaaaaiaii', 'AGORA_EU_ENTENDI', 'ALICINHA']
let sounds = []

sounds = getSounds();

function getSounds() {
    return soundsName.map(element => {
        let obj = {
            name: element,
            audio: new Audio('audios/' + element + '.mp3'),
            isPlaying: false
        }
        return obj;
    });
}

function generateButtons() {
    let mainDiv = document.getElementById("main");
    sounds.forEach(element => {
        let elementSound = document.createElement("div");
        elementSound.classList.add("audioButton")
        let buttonSound = document.createElement("input");
        buttonSound.type = "button";
        buttonSound.value = element.name;
        buttonSound.onclick = function() {playMusic(element.name);};
        elementSound.appendChild(buttonSound);
        mainDiv.appendChild(elementSound);
    });
}

generateButtons()

function playMusic(musicName) {
    sounds.forEach(element => {
        if (element.name === musicName) {
            if (element.isPlaying) {
                element.audio.pause()
            } else {
                element.audio.play()
            }
            element.isPlaying = !element.isPlaying
            // setTimeout(() => {element.audio.pause()}, 1000);
        }
    });
}

function filtro() {
    let sounds = [...document.getElementsByClassName("audioButton")];
    let textSearch = document.getElementById("search").value;
    if (!textSearch) {
        sounds.forEach(element => {
            element.hidden = false;
        });
        return;
    }
    sounds.forEach(element => {
        if (!element.getElementsByTagName("input")[0].value.includes(textSearch)) {
            element.hidden = true;
        } else {
            element.hidden = false;
        }
    });
}