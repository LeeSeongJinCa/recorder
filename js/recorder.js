// * soundPlays
const audio = new Audio();
const main = document.getElementById("mainHole");
const lastType = document.getElementById('lastTyping');

function audioPlay(n) {
    audio.src = `./sound/${n}.mp3`;
    audio.oncanplaythrough = () => {
        audio.play();
    }
}

function changeHolesColor(tag, sound, changeColor) {
    let parentTag = tag.parentNode;
    if(changeColor) parentTag.classList = sound;
    else            parentTag.classList = "";
}

function lastTyping(text) {
    lastType.textContent = text;
}

document.body.onkeydown = () => {
    let s;
    switch (window.event.keyCode) {
        case 65:
            s = "lowDo";
            audioPlay(s);
            changeHolesColor(main, s, true);
            lastTyping(s);
            break;
        case 83:
            s = "re"
            audioPlay(s);
            changeHolesColor(main, s, true);
            lastTyping(s);
            break;
        case 68: 
            s = "mi"
            audioPlay(s);
            changeHolesColor(main, s, true);
            lastTyping(s);
            break;
        case 70: 
            s = "fa"; 
            audioPlay(s);
            changeHolesColor(main, s, true);
            lastTyping(s);
            break;
        case 74: 
            s = "so";
            audioPlay(s);
            changeHolesColor(main, s, true);
            lastTyping(s);
            break;
        case 75: 
            s = "la";
            audioPlay(s);
            changeHolesColor(main, s, true);
            lastTyping(s);
            break;
        case 76: 
            s = "ti";
            audioPlay(s);
            changeHolesColor(main, s, true);
            lastTyping(s);
            break;
        case 186: 
            s = "highDo";
            audioPlay(s);
            changeHolesColor(main, s, true);
            lastTyping(s);
            break;
        default: return;
    }
};

document.body.onkeyup = () => {
    switch (window.event.keyCode) {
        case 65:
            changeHolesColor(main, "", false);
            break;
        case 83: 
            changeHolesColor(main, "", false);
            break;
        case 68:
            changeHolesColor(main, "", false);
            break;
        case 70: 
            changeHolesColor(main, "", false);
            break;
        case 74: 
            changeHolesColor(main, "", false);
            break;
        case 75: 
            changeHolesColor(main, "", false);
            break;
        case 76: 
            changeHolesColor(main, "", false);
            break;
        case 186:
            changeHolesColor(main, "", false);
            break;
        default: 
            return;
    }
};