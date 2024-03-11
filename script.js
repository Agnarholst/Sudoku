




let activeCell = null;
let activeCellId = null;
let box = [];
console.log(box);
const sudokuboard = {
    1: "2",
    2: "9",
    3: "1",
    4: "5",
    5: "3",
    6: "8",
    7: "4",
    8: "7",
    9: "6"
};

function makeActive(cell) {
    if (activeCell !== null) {
        activeCell.classList.remove("active");
    }

    activeCell = cell;
    cell.classList.add("active");
}

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
// }

// Checks if box is full against an object which is the Solution. 
function setNumber(num) {
    console.log(activeCell)
    activeCellId = activeCell.getAttribute("id"); //Et eller annet for fetche id'en til elementet. 
    console.log("Id:", activeCellId)
    console.log("Number:", num)
    if (activeCell !== null) {
        console.log("SetNumber Function Start")
        // Sjekk opp mot key i 
        for (let i of box) {
            console.log(i)
            if (num == i) {
                return console.log("Break. Already a number in the box.");
            }
        }
        activeCell.innerHTML = num;
        box.push(num);
        console.log(box);   
    }
}

// Vi trenger å få inn to argumenter... både rute-id som spiller har valgt og nummeren den trykker inn. Nummer har vi jo men vi må gi
// rute-id til hver rute og hente det på et vis. 

// Når man trykker på html-button elementet så går jo automatisk funksjonen dit med et tall... hardcoda til den knappen. 
// Men knappen kan jo ikke vite hvilken rute som skal bli trykket. Så jeg må på en måte hente id til activeCell hvis det går an. 

// document.getElementById("demo").innerHTML = "Hello World!";

// Så nå istedenfor for loopen så må jeg jeg bare gjøre et søk på Sudoku objektet basert på Key, altså Id-nummer til rute. 
// Også sammenligner man num med value... og da skal dette funke ganske bra. Så hvis det er likt! Da skal man få lov til å 
// skrive tallen i ruten og det følgende key-value-paret tas vekk fra objektet sudokuBoard.