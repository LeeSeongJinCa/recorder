// * soundPlays
const audio = new Audio();

// function plays(n) {
//     audioPause();
//     audioPlay(n);
// }
// function audioPause() {
//     const audioTag = document.querySelectorAll(".audio");
//     const audioArray = Array.from(audioTag);
//     audioArray.forEach(el => {
//         el.pause();
//         el.currentTime = 0;
//     });
// }
function audioPlay(n) {
    audio.src = `sound/sound${n}.mp3`;
    audio.oncanplaythrough = () => {
        audio.play();
    }
}
function hole(num) {
    const holeValue = document.querySelectorAll('.holes');
    return [holeValue[num - 1]];
}
// function changeToRed(tag, sound) {
//     tag.classList = sound;
// }
// function changeToOrginal(tag) {
//     tag.classList = "";
// }
function changeHolesColor(tag, sound, bool) {
    if(bool) {
        tag.classList = sound;
    } else {
        tag.classList = "";
    }
}
function lastTyping(text) {
    const lastTyping = document.getElementById('lastTyping');
    lastTyping.textContent = text;
}
function playSound(value, sound) {
    audioPlay(value);
    // hole(value).map((el) => changeToRed(el.parentNode, sound));
    hole(value).map((el) => changeHolesColor(el.parentNode, sound, true));
    lastTyping(sound);
}
function stopSound(value, sound) {
    // hole(value).map((el) => changeToOrginal(el.parentNode));
    hole(value).map((el) => changeHolesColor(el.parentNode, sound, false));
}
document.body.onkeydown = () => {
    const key = window.event.keyCode;
    let v;
    switch (key) {
        case 65: v = 1; playSound(v, "do"); break;
        case 83: v = 2; playSound(v, "re"); break;
        case 68: v = 3; playSound(v, "mi"); break;
        case 70: v = 4; playSound(v, "fa"); break;
        case 74: v = 5; playSound(v, "so"); break;
        case 75: v = 6; playSound(v, "la"); break;
        case 76: v = 7; playSound(v, "ti"); break;
        case 186: v = 8; playSound(v, "doo"); break;
        default: return;
    }
};
document.body.onkeyup = () => {
    const key = window.event.keyCode;
    let v;
    switch (key) {
        case 65: v = 1; stopSound(v); break;
        case 83: v = 2; stopSound(v); break;
        case 68: v = 3; stopSound(v); break;
        case 70: v = 4; stopSound(v); break;
        case 74: v = 5; stopSound(v); break;
        case 75: v = 6; stopSound(v); break;
        case 76: v = 7; stopSound(v); break;
        case 186: v = 8; stopSound(v); break;
        default: return;
    }
};
