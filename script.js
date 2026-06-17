const btns1 = document.querySelectorAll("#btns1 button");
const btns2_cnt = document.getElementById("btns2");
const p2 = document.getElementById("p2");
const colorButtons = [
    "blue50", "blue60", "blue70",
    "darkblue30", "darkblue50", "darkblue70",
    "green50", "green60", "green70",
    "grey40", "grey70", "grey80",
    "red50", "red60", "red70",
    "yellow50", "yellow60", "yellow70"
];
const mouthStyles = [
    "astonished",
    "default",
    "laugh",
    "tongue",
    "eating"
];
const legStyles = [
    "bubble-tea",
    "cookie",
    "default",
    "game-console",
    "tilt-backward",
    "tilt-forward"
];
const hairStyles = [
    "bang",
    "curls",
    "default",
    "elegant",
    "fancy",
    "short"
];
const eyesStyles = [
    "angry",
    "default",
    "naughty",
    "panda",
    "smart",
    "star"
];
const earsStyles = [
    "default",
    "tilt-backward",
    "tilt-forward"
];
const accessStyles = [
    "earings",
    "flower",
    "glasses",
    "headphone",
    "none"
];
const neckStyles = [
    "bend-backward",
    "bend-forward",
    "default",
    "thick"
];
let last = null;
btns1.forEach(e => {
    e.addEventListener('click', () => {
        btns1.forEach(btn => btn.classList.remove("active"));
        if (btns2_cnt.innerHTML == "" || last !== e.id) {
            btns2_cnt.innerHTML = "";
            key = e.id;
            switch (key) {
                case 'backgrounds':
                    names = colorButtons;
                    last = key;
                    break;

                case 'mouth':
                    names = mouthStyles;
                    last = key;
                    break;

                case 'leg':
                    names = legStyles;
                    last = key;
                    break;

                case 'hair':
                    names = hairStyles;
                    last = key;
                    break;

                case 'ears':
                    names = earsStyles;
                    last = key;
                    break;

                case 'eyes':
                    names = eyesStyles;
                    last = key;
                    break;

                case 'accessories':
                    names = accessStyles
                    last = key;
                    break;

                case 'neck':
                    names = neckStyles;
                    last = key;
                    break;
            }
            btns2_cnt.classList.add("active");
            names.forEach(folder => {
                const button = document.createElement('button');
                button.textContent = folder;
                button.addEventListener('click', () => {
                    let img = document.getElementById(key + "-photo");
                    if (folder == "none")
                        img.src = "";
                    else
                        img.src = "alpaca/" + key + "/" + folder + ".png"
                });
                btns2_cnt.appendChild(button);
                p2.classList.add("active");
                e.classList.add("active");
            });
        }
        else {
            btns2_cnt.classList.remove("active");
            p2.classList.remove("active");
            setTimeout(() => {
                btns2_cnt.innerHTML = "";
            }, 300);
        }
    });
});