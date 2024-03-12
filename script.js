let activeCell = null;
let activeCellId = null;
let box = [];
const sudokuboard = {
    "1": 5, "2": 0, "3": 3, "4": 0, "5": 2, "6": 6, "7": 4, "8": 9, "9": 0,

    "10": 9, "11": 1, "12": 0, "13": 0, "14": 3, "15": 0, "16": 0, "17": 8, "18": 6,

    "19": 0, "20": 0, "21": 7, "22": 8, "23": 0, "24": 5, "25": 2, "26": 0, "27": 0,

    "28": 0, "29": 5, "30": 0, "31": 7, "32": 0, "33": 0, "34": 8, "35": 0, "36": 9,

    "37": 0, "38": 2, "39": 0, "40": 0, "41": 5, "42": 0, "43": 0, "44": 0, "45": 0,

    "46": 1, "47": 7, "48": 8, "49": 0, "50": 0, "51": 3, "52": 0, "53": 0, "54": 2,

    "55": 0, "56": 0, "57": 0, "58": 0, "59": 7, "60": 8, "61": 0, "62": 4, "63": 5,

    "64": 0, "65": 0, "66": 0, "67": 0, "68": 4, "69": 0, "70": 7, "71": 9, "72": 0,

    "73": 0, "74": 2, "75": 4, "76": 0, "77": 1, "78": 9, "79": 3, "80": 0, "81": 0
};

function makeActive(cell) {
    if (activeCell !== null) {
        activeCell.classList.remove("active");
    }

    activeCell = cell;
    cell.classList.add("active");
}

let wrongCounter = 0;

function setNumber(num) {
    activeCellId = activeCell.getAttribute("id"); //Et eller annet for fetche id'en til elementet. 
    if (num === sudokuboard[activeCellId]) {
        activeCell.innerHTML = num;
        box.push(num);
        console.log(box);
    } else {
        wrongCounter++
        console.log("Wrong number.")
    }
    if (wrongCounter >= 3) {
        console.log("You lost.")
    }
}


// Funksjon som gjør at alle ruter med tallet 0 er "usynlige" så 0 ikke vises. 



// Checks if box is full against an array
// function setNumber(num) {
//     if (activeCell !== null) {
//         console.log("SetNumber Function Start")
//         for (let i of box) {
//             console.log(i)
//             if (num == i) {
//                 return console.log("Break. Already a number in the box.");
//             }
//         }
//         activeCell.innerHTML = num;
//         box.push(num);
//         console.log(box);   
//     }

// Sudokubrett kan jo tenkes som et stort array laget av av 9 arrays... også må man sammenligne arrays...
// Type eller så har man 18 unike arrays. Virker unødvendig. Eller så har man et array med mye loggikk, og splicing. 
// Type 81 tall... 1 til 9 må være unike right... 10 til 18 må være unike også videre... da har man jo sjekket at for 
// radene... også kan man sjekke for en rute.... som sier at rute-id 1, 2, 3 og 10, 11, 12, og 19, 20, 21 må være unike. 
// Slik sjekker man at boksen ikke har mer enn et av samme tall også må man sjekke rute-id 1, 10, 19, 28 også videre for å
// sjekke nedover. Det viktigste er at den ikke tar en slik sjekk for alle mulige tall... da blir det uffektivt... så basert
// på activeCellId som en parameter så må den kunne sjekke de tre greiene, men basert på samme funksjon... eller tre funksjoner. 
// En for boks, en for vertikal lengde, og en for horisontal lengde. Hvis ikke den gjør kun de tre så vil den jo kjøre alle radene
// horisontalt, vertikalt, og alle 9 boksene... for å kun skrive inn et tall... 

// Jeg tror det blir å lage en aktiveringsfunksjon akkurat som activeCell... så trigger activeCell en funskjon som aktiverer de 
// følgende id-rutene... horisontal, vertikal, og boksen activeCell befinner seg i. Også kjøre den de relativt enkel logiske testene.
// Som blir tre forskjellige if-statements basert på 3 arrays... som er splicet fra hoved array... I guess... også sjekker den en etter 
// en. Er boks ok? Er horisontal rad ok? Er vertikal rad ok? Hvis disse tre er ok så får man skrive inn ønkelig tall. 

// Så føler jeg å lage tre arrays for hver gang et tall skal skrives inn er unødvendig?? Kanskje det hadde vært best med med en
// to dimmensjonal array... et stort array med 9 arrays inni med 9 tall i hver. Da kan man jo bruke indeksering for å si hvilken rad
// aka array som skal sjekkes. Men må jo drive med splicing der også.... jeg prøver meg først på et array...aka et objekt. 