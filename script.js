let activeCell = null;
let activeCellId = null;
let box = [];
const sudokuboardLetters = {
    "01AAA": 5, "02ABA": 0, "03ACA": 3, "04ADB": 9, "05AEB": 1, "06AFB": 0, "07AGC": 0, "08AHC": 0, "09AIC": 7,

    "10BAA": 0, "11BBA": 2, "12BCA": 6, "13BDB": 0, "14BEB": 3, "15BFB": 0, "16BGC": 8, "17BHC": 0, "18BIC": 5,

    "19CAA": 4, "20CBA": 9, "21CCA": 0, "22CDB": 0, "23CEB": 8, "24CFB": 6, "25CGC": 2, "26CHC": 0, "27CIC": 0,

    "28DAD": 0, "29DBD": 5, "30DCD": 0, "31DDE": 0, "32DEE": 2, "33DFE": 0, "34DGF": 1, "35DHF": 7, "36DIF": 8,

    "37EAD": 7, "38EBD": 0, "39ECD": 0, "40EDE": 0, "41EEE": 5, "42EFE": 0, "43EGF": 0, "44EHF": 0, "45EIF": 3,

    "46FAD": 8, "47FBD": 0, "48FCD": 9, "49FDE": 0, "50FEE": 0, "51FFE": 0, "52FGF": 0, "53FHF": 0, "54FIF": 2,

    "55GAG": 0, "56GBG": 0, "57GCG": 0, "58GDH": 0, "59GEH": 0, "60GFH": 0, "61GGI": 0, "62GHI": 2, "63GII": 4,

    "64HAG": 0, "65HBG": 7, "66HCG": 8, "67HDH": 0, "68HEH": 4, "69HFH": 0, "70HGI": 0, "71HHI": 1, "72HII": 9,

    "73IAG": 0, "74IBG": 4, "75ICG": 5, "76IDH": 7, "77IEH": 9, "78IFH": 0, "79IGI": 3, "80IHI": 0, "81III": 0
};

const entriesArray = Object.entries(sudokuboardLetters);

let boxA = ["1", "2", "3", "10", "11", "12", "19", "20", "21"]
let boxB = ["4", "5", "6", "13", "14", "15", "22", "23", "24"]

function test() {
    cellNum = Number(entriesArray[1][0].slice(0, -3))
    cellRow = entriesArray[72][0].slice(2, -2)
    cellCol = entriesArray[72][0].slice(3, -1)
    cellBox = entriesArray[72][0].slice(-1)
}

test()


// Setter opp brettet ved å gjøre om sudoku-dictionary til et array.

function setBoard(board) {
    i = 1;
    while (i < 81) {
        cellId = entriesArray[i - 1][0];
        console.log(cellId);
        cellValue = entriesArray[i - 1][1];
        console.log("This is", cellValue)
        if (cellValue !== 0) {
            document.getElementById(cellId).style.color = "rgb(228, 234, 253)";
        }
        document.getElementById(cellId).innerHTML = cellValue;
        i++;
    }
}

setBoard(sudokuboardLetters)


function makeActive(cell) {
    if (activeCell !== null) {
        activeCell.classList.remove("active");
    }
    activeCell = cell;
    cell.classList.add("active");
}

let wrongCounter = 0;


function setNumber(num) {
    if (activeCell !== null) {
        console.log("SetNumber Function Start")
        activeCellId = activeCell.getAttribute("id")
        console.log(activeCell);
        for (let i of boxA) {
            console.log(sudokuboardLetters[i])
            if (num == sudokuboardLetters[i]) {
                return console.log("Break. Already a number in the box.");
            } 
        }
        activeCell.innerHTML = num;
        activeCell.style.color = "rgb(,228, 234, 253)";
        sudokuboardLetters[activeCellId] = Number(num);
        box.push(num);
        console.log(sudokuboardLetters);
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