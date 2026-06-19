const btns1 = document.querySelectorAll("#btns1 button");
const btns2_cnt = document.getElementById("btns2");
const p2 = document.getElementById("p2");
const Data = {
    backgrounds: [
        "blue50", "blue60", "blue70",
        "darkblue30", "darkblue50", "darkblue70",
        "green50", "green60", "green70",
        "grey40", "grey70", "grey80",
        "red50", "red60", "red70",
        "yellow50", "yellow60", "yellow70"
    ],
    mouth: [
        "astonished",
        "default",
        "laugh",
        "tongue",
        "eating"
    ],
    leg: [
        "bubble-tea",
        "cookie",
        "default",
        "game-console",
        "tilt-backward",
        "tilt-forward"
    ],
    hair: [
        "bang",
        "curls",
        "default",
        "elegant",
        "fancy",
        "short"
    ],
    eyes: [
        "angry",
        "default",
        "naughty",
        "panda",
        "smart",
        "star"
    ],
    ears: [
        "default",
        "tilt-backward",
        "tilt-forward"
    ],
    accessories: [
        "earings",
        "flower",
        "glasses",
        "headphone",
        "none"
    ],
    neck: [
        "bend-backward",
        "bend-forward",
        "default",
        "thick"
    ]
};

function change(key, folder) {
    const btns2 = document.querySelectorAll("#btns2 button");
    let img = document.getElementById(key + "-photo");
    img.src = "alpaca/" + key + "/" + folder + ".png"
}

function category(id) {
    btns1.forEach(btn => btn.classList.remove("active"));
    if (btns2_cnt.innerHTML == "" || last !== id) {
        btns2_cnt.innerHTML = "";
        last = id;
        names = Data[id];
        let img = document.getElementById(last + "-photo");
        btns2_cnt.classList.add("active");
        names.forEach(folder => {
            const button = document.createElement('button');
            button.textContent = folder;
            button.addEventListener('click', () => {
                change(last, folder);
            });
            btns2_cnt.appendChild(button);
            p2.classList.add("active");
        });
        document.getElementById(id).classList.toggle("active");
    }
    else {
        btns2_cnt.classList.remove("active");
        p2.classList.remove("active");
        setTimeout(() => {
            btns2_cnt.innerHTML = "";
        }, 300);
    }
}

btns1.forEach(e => {
    e.addEventListener('click', () => {
        category(e.id);
    });
});

function random() {
    Object.keys(Data).forEach(row => {
        let selected = Math.floor(Math.random() * Data[row].length);
        change(row, Data[row][selected]);
    });
}

function download() {
    let imgs = document.getElementById("imgs");
    document.getElementById("backgrounds-photo").style.borderRadius = "0px";
    html2canvas(imgs).then(canvas => {
        canvas.style.borderRadius = "0px";
        let link = document.createElement("a");
        link.download = "My-Alpaca.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
    document.getElementById("backgrounds-photo").style.borderRadius = "40px";
}

function active() {
    let img = document.getElementById(last + "-photo");
    let btns2 = document.querySelectorAll("#btns2 button");
    let access = document.getElementById("accessories-photo");
    let access_src = access.src.split('/').pop().replace('.png', '');
    btns2.forEach(btn => btn.classList.remove("active"));
    btns2.forEach(btn => {
        let imageName = img.src.split('/').pop().replace('.png', '');
        if (imageName === btn.textContent)
            btn.classList.add("active");
    });
    
}

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        active();
    }
});