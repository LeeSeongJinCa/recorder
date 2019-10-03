// * soundPlay
function plays(n) {
    let audio = document.getElementById(`audio_play${n}`);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
}
function hole(num) {
    let holeValue = document.querySelectorAll('.holes');
    return [holeValue[num - 1]];
}
function changeToRed(tag, sound) {
    tag.classList = sound;
}
function changeToOrginal(tag) {
    tag.classList = "";
}
function playSound(value, sound) {
    plays(value);
    hole(value).map((el) =>
        changeToRed(el.parentNode.parentNode, sound)
    );
    lastTyping(sound);
}
function stopSound(value) {
    hole(value).map((el) =>
        changeToOrginal(el.parentNode.parentNode)
    );
}
function lastTyping(text) {
    let lastTyping = document.getElementById('lastTyping');
    lastTyping.textContent = text;
}

document.body.onkeydown = () => {
    let key = window.event.keyCode,
        v;
    switch (key) {
        case 65:
            v = 1; playSound(v, "do");
            break;
        case 83:
            v = 2; playSound(v, "re");
            break;
        case 68:
            v = 3; playSound(v, "mi");
            break;
        case 70:
            v = 4; playSound(v, "fa");
            break;
        case 74:
            v = 5; playSound(v, "so");
            break;
        case 75:
            v = 6; playSound(v, "la");
            break;
        case 76:
            v = 7; playSound(v, "ti");
            break;
        case 186:
            v = 8; playSound(v, "doo");
            break;
        default:
            return;
    }
};
document.body.onkeyup = () => {
    let key = window.event.keyCode,
        v;
    switch (key) {
        case 65:
            v = 1; stopSound(v);
            break;
        case 83:
            v = 2; stopSound(v);
            break;
        case 68:
            v = 3; stopSound(v);
            break;
        case 70:
            v = 4; stopSound(v);
            break;
        case 74:
            v = 5; stopSound(v);
            break;
        case 75:
            v = 6; stopSound(v);
            break;
        case 76:
            v = 7; stopSound(v);
            break;
        case 186:
            v = 8; stopSound(v);
            break;
        default:
            return;
    }
};

