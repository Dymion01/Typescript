var runda = 1;
// let  zwyciezca  = null;
var listaRuchow = [
    "", "", "",
    "", "", "",
    "", "", ""
];
//   const kombinacje =[
//   [0,1,2] , [3,4,5] , [6,7,8] ,
//   [0,3,6] , [1,4,7] , [2,5,8] , 
//   [0,4,8] , [2,4,6] 
//    ];
//    function Check() {
//    let moves = {
//      "fa-times" : [],
//      "fa-circle-o" : [] 
//    };
//    listaRuchow.forEach((field , index ) =>moves[field] ? moves[field].push(index) : null);
//    kombinacje.forEach(kombinacja => {
//      if(kombinacja.every(index => moves["fa-circle-o"].indexOf(index) > -1)) {
//       zwyciezca = "Wygrał gracz pierwszy";
//       window.alert(zwyciezca);
//      }
//      if(kombinacja.every(index => moves["fa-times"].indexOf(index) > -1)) {
//       zwyciezca = "Wygrał gracz drugi";
//       window.alert(zwyciezca);
//      }
//      if(moves["fa-circle-o"].length + moves["fa-times"].length == 9) {
//       zwyciezca = "Remis!";
//       window.alert(zwyciezca);
//      }
//    });
//    return zwyciezca;
//  }
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
        this.kombinacje = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        var cells = [];
        for (var i = 0; i < num * num; i++) {
            cells[i] = new Cell(i);
        }
        console.log(cells);
        var doc = document.getElementById("playGround");
        var board = document.createElement('table');
        board.id = "table";
        var numberOfClickcell = -1;
        var _loop_1 = function (i) {
            var tr = document.createElement('tr');
            var _loop_2 = function (j) {
                var td = document.createElement('td');
                td.classList.add("fa");
                td.classList.add("box");
                td.id = ("cell" + i + j);
                console.log(numberOfClickcell);
                if (td.id = ("cell" + i + j)) {
                    td.onclick = function (e) { cells[3 * (i) + j].clickCell(td), _this.Check(); };
                }
                ;
                tr.appendChild(td);
                // console.log(numberOfClickcell);
                numberOfClickcell++;
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
        doc.appendChild(board);
    }
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
            if (moves["fa-circle-o"].length + moves["fa-times"].length == 9) {
                _this.zwyciezca = "Remis!";
                window.alert(_this.zwyciezca);
            }
        });
        return this.zwyciezca;
    };
    return Board;
}());
;
window.onload = function () {
    var board = new Board(3);
};
