let activeCell = null;
let activeCellId = null;
let box = [];
const sudokuboardLetters = {
    "01A": 5, "02A": 0, "03A": 3, "04B": 9, "05B": 1, "06B": 0, "07C": 0, "08C": 0, "09C": 7,

    "10A": 0, "11A": 2, "12A": 6, "13B": 0, "14B": 3, "15B": 0, "16C": 8, "17C": 0, "18C": 5,

    "19A": 4, "20A": 9, "21A": 0, "22B": 0, "23B": 8, "24B": 6, "25C": 2, "26C": 0, "27C": 0,

    "28D": 0, "29D": 5, "30D": 0, "31E": 0, "32E": 2, "33E": 0, "34F": 1, "35F": 7, "36F": 8,

    "37D": 7, "38D": 0, "39D": 0, "40E": 0, "41E": 5, "42E": 0, "43F": 0, "44F": 0, "45F": 3,

    "46D": 8, "47D": 0, "48D": 9, "49E": 0, "50E": 0, "51E": 0, "52F": 0, "53F": 0, "54F": 2,

    "55G": 0, "56G": 0, "57G": 0, "58H": 0, "59H": 0, "60H": 0, "61I": 0, "62I": 2, "63I": 4,

    "64G": 0, "65G": 7, "66G": 8, "67H": 0, "68H": 4, "69H": 0, "70I": 0, "71I": 1, "72I": 9,

    "73G": 0, "74G": 4, "75G": 5, "76H": 7, "77H": 9, "78H": 0, "79I": 3, "80I": 0, "81I": 0
};

const entriesArray = Object.entries(sudokuboardLetters);

let A = ["1", "2", "3", "10", "11", "12", "19", "20", "21"]
let B = ["4", "5", "6", "13", "14", "15", "22", "23", "24"]



// Forsøk bare å sett første rute til første veriden i nøkkel 1. Også prøv 2-3 ruter, også prøv å lag en loop som tar alle 81. 

// Test Function
function test() {
    numExtraction = Number(entriesArray[3][0].slice(0, -1));
}

test()

// // function setBoard(board) {
//     i = 1;
//     while (i < 81) {
//         console.log(i + "A")
//         cellValue = board[i + "A"];
//         console.log(cellValue);
//         i++
//     }
//     //     if (cellValue !== 0) {
//     //         document.getElementById(i).style.color = "rgb(228, 234, 253)";
//     //     }
//     //     document.getElementById(i).innerHTML = cellValue;
//     //     i++;
//     // }
// }

// function setBoard(board) {
//     i = 1;
//     while (i < 81) {
//         console.log(i + "A")
//         cellValue = board[i + "A"];
//         console.log(cellValue);
//         i++
//     }
//         if (cellValue !== 0) {
//             document.getElementById(i).style.color = "rgb(228, 234, 253)";
//         }
//         = document.getElementById(i).innerHTML = cellValue;
//         i++;
//     }
// }

// setBoard(sudokuboard);

// GAMMEL KODE FOR BAKCUP 1/2................

const sudokuboard = {
    "1": 5, "2": 0, "3": 3, "4": 9, "5": 1, "6": 0, "7": 0, "8": 0, "9": 7,

    "10": 0, "11": 2, "12": 6, "13": 0, "14": 3, "15": 0, "16": 8, "17": 0, "18": 5,

    "19": 4, "20": 9, "21": 0, "22": 0, "23": 8, "24": 6, "25": 2, "26": 0, "27": 0,

    "28": 0, "29": 5, "30": 0, "31": 0, "32": 2, "33": 0, "34": 1, "35": 7, "36": 8,

    "37": 7, "38": 0, "39": 0, "40": 0, "41": 5, "42": 0, "43": 0, "44": 0, "45": 3,

    "46": 8, "47": 0, "48": 9, "49": 0, "50": 0, "51": 0, "52": 0, "53": 0, "54": 2,

    "55": 0, "56": 0, "57": 0, "58": 0, "59": 0, "60": 0, "61": 0, "62": 2, "63": 4,

    "64": 0, "65": 7, "66": 8, "67": 0, "68": 4, "69": 0, "70": 0, "71": 1, "72": 9,

    "73": 0, "74": 4, "75": 5, "76": 7, "77": 9, "78": 0, "79": 3, "80": 0, "81": 0
};

// GAMMEL KODE FOR BAKCUP 2/2

function setBoard(board) {
    i = 1;
    while (i < 81) {
        cellValue = board[i];
        console.log(cellValue);
        if (cellValue !== 0) {
            document.getElementById(i).style.color = "rgb(228, 234, 253)";
        }
        document.getElementById(i).innerHTML = cellValue;
        i++;
    }
}

setBoard(sudokuboard)

// GAMMEL KODE SLUTTER HER.................

function makeActive(cell) {
    if (activeCell !== null) {
        activeCell.classList.remove("active");
    }
    activeCell = cell;
    cell.classList.add("active");
}

let wrongCounter = 0;

// function setNumber(num) {
//     activeCellId = activeCell.getAttribute("id"); //Et eller annet for fetche id'en til elementet. 
//     if (num === sudokuboard[activeCellId]) {
//         activeCell.innerHTML = num;
//         box.push(num);
//         console.log(box);
//     } else {
//         wrongCounter++
//         console.log("Wrong number.")
//     }
//     if (wrongCounter >= 3) {
//         console.log("You lost.")
//     }
// }


// Funksjon som gjør at alle ruter med tallet 0 er "usynlige" så 0 ikke vises. 



//Checks if box is full against an array
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
//         activeCell.style.color = "rgb(228, 234, 253)";
//         box.push(num);
//         console.log(box);
//     }
// }


function setNumber(num) {
    if (activeCell !== null) {
        console.log("SetNumber Function Start")
        activeCellId = activeCell.getAttribute("id")
        for (let i of A) {
            console.log(sudokuboard[i])
            if (num == sudokuboard[i]) {
                return console.log("Break. Already a number in the box.");
            } 
        }
        activeCell.innerHTML = num;
        activeCell.style.color = "rgb(,228, 234, 253)";
        sudokuboard[activeCellId] = Number(num);
        box.push(num);
        console.log(sudokuboard);
    }
}


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