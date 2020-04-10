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
        // console.log(listaRuchow);
    };
    ;
    return Cell;
}());
var Board = /** @class */ (function () {
    //  public tab :Cell[];
    function Board(num) {
        var cells = [];
        // let tab : Cell[] = new Cell[2]  ;
        for (var i = 0; i < num * num; i++) {
            cells[i] = new Cell(i);
            // let cell = new Cell(i);
            // tab.push(cell);
        }
        console.log(cells);
        var doc = document.getElementById("playGround");
        var board = document.createElement('table');
        board.id = "table";
        for (var i = 0; i < num; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < num; j++) {
                var td = document.createElement('td');
                td.classList.add("fa");
                td.classList.add("box");
                td.id = ("cell" + i + j);
                tr.appendChild(td);
            }
            ;
            board.appendChild(tr);
        }
        doc.appendChild(board);
        // for(let i = 0 ; i< num*num; i ++){
        //   let cell = new Cell(i);
        //   this.tab.push(cell);
        // }
        var boxes = [document.querySelectorAll(".box")];
        boxes.forEach(function (element) { return console.log(element); });
        var _loop_1 = function (i) {
            boxes[i].onclick = function () { return cells[i].clickCell(boxes[i]); };
        };
        for (var i = 0; i < boxes.length - 1; i++) {
            _loop_1(i);
        }
        ;
    }
    ;
    return Board;
}());
;
//.addEventListener('click',cells[i].clickCell(boxes[i]))  cells[i].clickCell(boxes[i] boxes.forEach(element  =>  element.onclick = (e)=> cells[i].clickCell(element) );
window.onload = function () {
    var board = new Board(3);
    //     let cell1 = new Cell(1);
    //     let cell2 = new Cell(2);
    //     let cell3 = new Cell(3);
    //     let cell4 = new Cell(4);
    //     let cell5 = new Cell(5);
    //     let cell6 = new Cell(6);
    //     let cell7 = new Cell(7);
    //     let cell8 = new Cell(8);
    //     let cell9 = new Cell(9);
    //     let cell11: HTMLElement = <HTMLElement>document.getElementById("cell11");
    //     let cell12: HTMLElement  = <HTMLElement>document.getElementById("cell12");
    //     let cell13: HTMLElement  = <HTMLElement>document.getElementById("cell13");
    //     let cell21: HTMLElement  = <HTMLElement>document.getElementById("cell21");
    //     let cell22: HTMLElement  = <HTMLElement>document.getElementById("cell22");
    //     let cell23: HTMLElement  = <HTMLElement>document.getElementById("cell23");
    //     let cell31: HTMLElement  = <HTMLElement>document.getElementById("cell31");
    //     let cell32: HTMLElement  = <HTMLElement>document.getElementById("cell32");
    //     let cell33: HTMLElement  = <HTMLElement>document.getElementById("cell33");
    //      let board :Board = new Board( [cell1 ,cell2, cell3, cell4 ,cell5, cell6, cell7 ,cell8, cell9, ]);
    //  cell11.onclick = (e) => { cell1.clickCell(cell11)};/*, console.log (cell1.clickCell(cell11))*/
    //  cell12.onclick = (e) => { cell2.clickCell(cell12)};
    //  cell13.onclick = (e) => { cell3.clickCell(cell13)};
    //  cell21.onclick = (e) => { cell4.clickCell(cell21)};
    //  cell22.onclick = (e) => { cell5.clickCell(cell22)};
    //  cell23.onclick = (e) => { cell6.clickCell(cell23)};
    //  cell31.onclick = (e) => { cell7.clickCell(cell31)};
    //  cell32.onclick = (e) => { cell8.clickCell(cell32)};
    //  cell33.onclick = (e) => { cell9.clickCell(cell33)};
};
