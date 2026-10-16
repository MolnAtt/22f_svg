class Bolygo{
    // m (tömeg)  -> 
    // hely: pozíció [x, y] 
    // sűrűség: szám
    // szin
    // v: 
}


let vaszon = document.getElementById("vaszon");
// let vaszon = document.querySelector("#vaszon");

function kor(kozeppont, sugar, szin) {
    let k = document.createElementNS('http://www.w3.org/2000/svg','circle');  // <circle>
    k.setAttribute("cx", kozeppont[0]); // <circle cx="50">
    k.setAttribute("cy", kozeppont[1]); // <circle cx="50" cy="100">
    k.setAttribute("r", sugar); // <circle cx="50" cy="100" r="30">
    k.setAttribute("fill", szin); // <circle cx="50" cy="100" r="30" fill="red">
    vaszon.appendChild(k);
    return k;
}

function p2d(pont){
    let [a,r] = pont;
    return [r*Math.cos(a), r*Math.sin(a)];
}
0
function d2p(pont){
    let [x,y] = pont;
    return [Math.atan2(y, x), Math.sqrt(x*x+y*y)];
}

function varakozas(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animacio() {
    let p = [370, 0];
    let k = kor(p, 30, "#ff0000");

    
    for (let i = 0; i < 100; i++) {
        let [a,r] = d2p(p);
        a+=.01;
        p = p2d([a,r]);
        k.setAttribute("cx", p[0]);
        k.setAttribute("cy", p[1]);
        await varakozas(10);
    }
}

animacio();