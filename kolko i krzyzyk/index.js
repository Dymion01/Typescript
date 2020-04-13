var runda = 1;
// let  zwyciezca  = null;
var listaRuchow = [
    "", "", "",
    "", "", "",
    "", "", ""
];
var Cell = /** @class */ (function () {
    function Cell(num) {
        this.num = num;
        this.Num = num;
    }
    ;
    Cell.prototype.clickCell = function (e) {
        var gracz1 = "fa-times";
        var gracz2 = "fa-circle-o";
        // if(listaRuchow[this.Num] !== "") return;
        var tura = runda % 2 === 0 ? gracz1 : gracz2;
        listaRuchow[this.Num] = tura;
        console.log(tura);
        e.classList.add(tura);
        e.classList.add("fa-5x");
        runda++;
    };
    ;
    return Cell;
}());
var Board = /** @class */ (function () {
    function Board(num) {
        var _this = this;
        this.zwyciezca = null;
        this.Size = num;
        var cells = [];
        this.SetConbinatoions(num);
        for (var i = 0; i < num * num; i++) {
            cells[i] = new Cell(i);
        }
        console.log(cells);
        var doc = document.getElementById("playGround");
        var board = document.createElement('table');
        board.id = "table";
        var _loop_1 = function (i) {
            var tr = document.createElement('tr');
            var _loop_2 = function (j) {
                var td = document.createElement('td');
                td.classList.add("fa");
                td.classList.add("box");
                td.id = ("cell" + i + j);
                if (td.id = ("cell" + i + j)) {
                    td.onclick = function (e) { cells[_this.Size * (i) + j].clickCell(td), _this.Check(); };
                }
                ;
                tr.appendChild(td);
                console.log(td);
            };
            for (var j = 0; j < num; j++) {
                _loop_2(j);
            }
            ;
            board.appendChild(tr);
        };
        for (var i = 0; i < num; i++) {
            _loop_1(i);
        }
        ;
        doc.appendChild(board);
    }
    ;
    Board.prototype.SetConbinatoions = function (x) {
        switch (x) {
            case 3:
                this.kombinacje = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]
                ];
                console.log(this.kombinacje);
                break;
            case 4:
                this.kombinacje = [
                    [0, 1, 2], [1, 2, 3], [4, 5, 6], [5, 6, 7], [8, 9, 10],
                    [9, 10, 11], [12, 13, 14], [13, 14, 15], [0, 4, 8], [1, 5, 9],
                    [2, 6, 10], [3, 7, 11], [4, 8, 12], [5, 9, 13], [6, 10, 14],
                    [7, 11, 15], [1, 6, 11], [0, 5, 10], [5, 10, 15], [4, 9, 14],
                    [2, 5, 8], [3, 6, 9], [6, 9, 12], [7, 10, 13]
                ];
                console.log(this.kombinacje);
                break;
        }
        ;
    };
    ;
    Board.prototype.Check = function () {
        var _this = this;
        var moves = {
            "fa-times": [],
            "fa-circle-o": []
        };
        listaRuchow.forEach(function (field, index) { return moves[field] ? moves[field].push(index) : null; });
        this.kombinacje.forEach(function (kombinacja) {
            if (kombinacja.every(function (index) { return moves["fa-circle-o"].indexOf(index) > -1; })) {
                _this.zwyciezca = "Wygrał gracz pierwszy";
                window.alert(_this.zwyciezca);
            }
            if (kombinacja.every(function (index) { return moves["fa-times"].indexOf(index) > -1; })) {
                _this.zwyciezca = "Wygrał gracz drugi";
                window.alert(_this.zwyciezca);
            }
            if (moves["fa-circle-o"].length + moves["fa-times"].length == (_this.Size * _this.Size)) {
                _this.zwyciezca = "Remis!";
                window.alert(_this.zwyciezca);
            }
        });
        return this.zwyciezca;
    };
    ;
    return Board;
}());
;
var playGround = document.getElementById("playGround");
var table = document.getElementById("table");
document.getElementById("button3").onclick = function (e) { return new Board(3); };
document.getElementById("button4").onclick = function (e) { return new Board(4); };
