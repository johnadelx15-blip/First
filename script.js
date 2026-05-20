document.querySelectorAll("#bnts1 button").forEach(e=>{
    addEventListener("click", ()=>{
        document.getElementById("background").style.display = "flex";
    });
});


function main(id) {
    let h = document.getElementById(id);
    h.classList.replace("cl", "cl3");
}

function rem2(id) {
    let h = document.getElementById(id).querySelectorAll("button.cl4");
    h.forEach(e => { e.classList.remove("cl4") });
}

function main2(id, value) {
    rem2(id);
    let h = document.getElementById(id);
    let c = h.querySelectorAll(`button[value="${value}"]`);
    c.forEach(e => { e.classList.add("cl4") });
}


function rem() {
    let h = document.getElementsByClassName("cl3");
    Array.from(h).forEach(el => {
        el.classList.replace("cl3", "cl");
    });
}


function hide() {
    document.querySelectorAll(".cl2").forEach(el => { el.style.display = "none"; });
}

function ranfolder() {
    const folders = ["aces", "back", "er", "ey", "hr", "lg", "mth", "nk"];
    const images = {
        aces: ["accessories", "acces", "earings", "flower", "glasses", "headphone"],

        back: ["backgrounds", "background", "blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70",
            "green50", "green60", "green70", "grey40", "grey70", "grey80",
            "red50", "red60", "red70", "yellow50", "yellow60", "yellow70"],

        er: ["ears", "ers", "default", "tilt-backward", "tilt-forward"],

        ey: ["eyes", "eys", "angry", "default", "naughty", "panda", "smart", "star"],

        hr: ["hair", "hrbt", "bang", "curls", "default", "elegant", "fancy", "short"],

        lg: ["leg", "legbt", "bubble-tea", "cookie", "default", "game-console", "tilt-backward", "tilt-forward"],

        mth: ["mouth", "moth", "astonished", "default", "eating", "laugh", "tongue"],

        nk: ["neck", "nkbt", "bend-backward", "bend-forward", "default", "thick"]
    }

    folders.forEach(e => {
        const h = images[e][2 + Math.floor(Math.random() * (images[e].length - 2))];
        const c = document.getElementById(e);
        c.src = `alpaca/${images[e][0]}/${h}.png`;
        if (e === 'aces') c.style.display = 'block';
        main2(images[e][1], h)
    });



}


function s11(value) {
    let img = document.getElementById("back");
    img.src = "alpaca/backgrounds/" + value + ".png";
    img.style.display = "block";
}

function s12(id) {
    hide();
    rem();
    main(id);
    document.getElementById("p2").style.display = "block";
    document.getElementById("p2").style.left = "650px";
    document.getElementById("p2").style.top = "385px";
    let bcrd = document.getElementById("background");
    bcrd.style.display = "grid";
}


function s13(value) {
    let img = document.getElementById("aces");
    document.getElementById("aces").style.zIndex = 9;
    img.src = "alpaca/accessories/" + value + ".png";
    img.style.display = "block";
}
function s14(id) {
    hide();
    rem();
    main(id);
    let acs = document.getElementById("acces");
    document.getElementById("p2").style.display = "block";
    document.getElementById("p2").style.left = "750px";
    document.getElementById("p2").style.top = "385px"
    acs.style.display = "grid";
}
function s15() {
    let img = document.getElementById("aces");
    img.style.display = "none";
}


function s16(value) {
    let img = document.getElementById("hr");
    if (document.getElementById("aces").src.includes("headphone.png")) {
        img.src = "alpaca/hair/" + value + ".png"
        let ac = document.getElementById("aces");
        ac.style.zIndex = 7;
        img.style.zIndex = 8;
        document.getElementById("ey").style.zIndex = 9;
    }
    else {
        if (document.getElementById("hr").src.includes("curls.png")) {
            document.getElementById("hr").src = "alpaca/hair/" + value + ".png"
        }

        else {
            document.getElementById("hr").src = "alpaca/hair/" + value + ".png"
        }
    }
}
function s17(id) {
    hide();
    rem();
    main(id);
    document.getElementById("p2").style.display = "block";
    document.getElementById("p2").style.left = "750px";
    document.getElementById("p2").style.top = "385px";
    let hrbt = document.getElementById("hrbt");
    hrbt.style.display = "grid";
}


function s18(id) {
    hide();
    rem();
    main(id);
    document.getElementById("moth").style.display = "grid";
    document.getElementById("p2").style.display = "block";
    document.getElementById("p2").style.left = "750px";
    document.getElementById("p2").style.top = "385px"
}
function s19(value) {
    document.getElementById("mth").src = "alpaca/mouth/" + value + ".png";
}


function s20(id) {
    hide();
    rem();
    main(id);
    document.getElementById("legbt").style.display = "grid";
    document.getElementById("p2").style.display = "block";
    document.getElementById("p2").style.left = "750px";
    document.getElementById("p2").style.top = "385px"
}
function s21(value) {
    document.getElementById("lg").src = "alpaca/leg/" + value + ".png";
}


function s22(id) {
    hide();
    rem();
    main(id);
    document.getElementById("eys").style.display = "grid";
    document.getElementById("p2").style.display = "block";
    document.getElementById("p2").style.left = "750px";
    document.getElementById("p2").style.top = "385px"
}
function s23(value) {
    document.getElementById("ey").src = "alpaca/eyes/" + value + ".png"
}


function s24(id) {
    hide();
    rem();
    main(id);
    document.getElementById("ers").style.display = "grid";
    document.getElementById("p2").style.display = "block";
    document.getElementById("p2").style.left = "750px";
    document.getElementById("p2").style.top = "385px"
}
function s25(value) {
    document.getElementById("er").src = "alpaca/ears/" + value + ".png";
}


function s26(id) {
    hide();
    rem();
    main(id);
    document.getElementById("nkbt").style.display = "grid";
    document.getElementById("p2").style.display = "block";
    document.getElementById("p2").style.left = "750px";
    document.getElementById("p2").style.top = "385px"
}
function s27(value) {
    document.getElementById("nk").src = "alpaca/neck/" + value + ".png";
}
function im() {
    const imges = document.querySelectorAll(".imgs1 img");
    const base = document.getElementById("back");
    const canv = document.createElement("canvas");
    const ctx = canv.getContext("2d");
    canv.width = base.naturalWidth;
    canv.height = base.naturalHeight;
    ctx.drawImage(base, 0, 0, canv.width, canv.height);
    imges.forEach(img => {
        if (img.style.display !== "none") {
            ctx.drawImage(img, 0, 0, canv.width, canv.height);
        }
    });
    const final = canv.toDataURL("image/png");

    const link = document.createElement('a');
    link.href = final;
    link.download = 'alpaca.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    canv.style.display = "none";
}