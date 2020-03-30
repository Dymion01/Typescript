var runda = 1;
var zwyciezca = null;
var listaRuchow = [
    "", "", "",
    "", "", "",
    "", "", ""
];
var kombinacje = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
function Check() {
    var moves = {
        "fa-times": [],
        "fa-circle-o": []
    };
    listaRuchow.forEach(function (field, index) { return moves[field] ? moves[field].push(index) : null; });
    kombinacje.forEach(function (kombinacja) {
        if (kombinacja.every(function (index) { return moves["fa-circle-o"].indexOf(index) > -1; })) {
            zwyciezca = "Wygrał gracz pierwszy";
        }
        if (kombinacja.every(function (index) { return moves["fa-times"].indexOf(index) > -1; })) {
            zwyciezca = "Wygrał gracz drugi";
        }
    });
    return zwyciezca;
}
var Cell = /** @class */ (function () {
    function Cell(num) {
        this.num = num;
        this.Num = num - 1;
    }
    ;
    Cell.prototype.clickCell = function (e) {
        var gracz1 = "fa-times";
        var gracz2 = "fa-circle-o";
        if (listaRuchow[this.Num] !== "")
            return;
        var tura = runda % 2 === 0 ? gracz1 : gracz2;
        listaRuchow[this.Num] = tura;
        e.classList.add(tura);
        e.classList.add("fa-5x");
        runda++;
        console.log(Check());
        // console.log(listaRuchow);
    };
    ;
    return Cell;
}());
var Board = /** @class */ (function () {
    function Board(t) {
        this.tab = Cell[9];
        this.tab = t;
    }
    return Board;
}());
;
window.onload = function () {
    var cell1 = new Cell(1);
    var cell2 = new Cell(2);
    var cell3 = new Cell(3);
    var cell4 = new Cell(4);
    var cell5 = new Cell(5);
    var cell6 = new Cell(6);
    var cell7 = new Cell(7);
    var cell8 = new Cell(8);
    var cell9 = new Cell(9);
    var cell11 = document.getElementById("cell11");
    var cell12 = document.getElementById("cell12");
    var cell13 = document.getElementById("cell13");
    var cell21 = document.getElementById("cell21");
    var cell22 = document.getElementById("cell22");
    var cell23 = document.getElementById("cell23");
    var cell31 = document.getElementById("cell31");
    var cell32 = document.getElementById("cell32");
    var cell33 = document.getElementById("cell33");
    var board = new Board([cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9,]);
    cell11.onclick = function (e) { cell1.clickCell(cell11); }; /*, console.log (cell1.clickCell(cell11))*/
    cell12.onclick = function (e) { cell2.clickCell(cell12); };
    cell13.onclick = function (e) { cell3.clickCell(cell13); };
    cell21.onclick = function (e) { cell4.clickCell(cell21); };
    cell22.onclick = function (e) { cell5.clickCell(cell22); };
    cell23.onclick = function (e) { cell6.clickCell(cell23); };
    cell31.onclick = function (e) { cell7.clickCell(cell31); };
    cell32.onclick = function (e) { cell8.clickCell(cell32); };
    cell33.onclick = function (e) { cell9.clickCell(cell33); };
};
