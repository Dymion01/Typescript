let runda = 1;
// let  zwyciezca  = null;
  const listaRuchow : Array<string> = [
  "" , "" , "" ,
  "" , "" , "" ,
  "" , "" , "" 
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

 class Cell {
public Num:number


  constructor (public num: number ){
      this.Num = num;
      
  };
 
public clickCell(e){
  
  const gracz1 ="fa-times";
  const gracz2 ="fa-circle-o";

  // if(listaRuchow[this.Num] !== "") return;
  const tura = runda % 2 === 0 ? gracz1 : gracz2 ;
  listaRuchow[this.Num] = tura;
console.log(tura);
  e.classList.add(tura);
  e.classList.add("fa-5x")
  runda++;
 
  
  

  
};

 }


class Board {

     
     constructor (num :number ){
       var cells :Cell[]=[];

        for(let i = 0 ; i< num*num; i ++){
          cells[i] = new Cell(i);
          
        }
        console.log(cells);
        let doc = document.getElementById("playGround");
        let board = document.createElement('table');
        board.id = "table";
        let numberOfClickcell :number = -1;
        
        for (let i  =0 ; i < num  ; i++) {
              let tr = document.createElement('tr');
              for(let j = 0 ; j< num ; j++){
                let td = document.createElement('td');
                td.classList.add("fa");
                td.classList.add("box")
                td.id = ("cell" + i+j);
                console.log(numberOfClickcell);
                if(td.id = ("cell" + i+j)) {
                td.onclick = (e) =>{cells[3*(i) + j].clickCell(td) ,this.Check()};
                };
                tr.appendChild(td);
                // console.log(numberOfClickcell);
                numberOfClickcell++;
                // console.log(numberOfClickcell);
              };
              board.appendChild(tr);
        }
        doc.appendChild(board);
        


     };
       zwyciezca  = null;
         kombinacje =[
            [0,1,2] , [3,4,5] , [6,7,8] ,
            [0,3,6] , [1,4,7] , [2,5,8] , 
            [0,4,8] , [2,4,6] 
          ];
  Check() 
  {
       let moves = 
          {
              "fa-times" : [],
              "fa-circle-o" : [] 
          };
       listaRuchow.forEach((field , index ) =>moves[field] ? moves[field].push(index) : null);
       this.kombinacje.forEach(kombinacja => {
         if(kombinacja.every(index => moves["fa-circle-o"].indexOf(index) > -1)) {
          this.zwyciezca = "Wygrał gracz pierwszy";
          window.alert(this.zwyciezca);
         }
         if(kombinacja.every(index => moves["fa-times"].indexOf(index) > -1)) {
          this.zwyciezca = "Wygrał gracz drugi";
          window.alert(this.zwyciezca);
         }
         if(moves["fa-circle-o"].length + moves["fa-times"].length == 9) {
          this.zwyciezca = "Remis!";
          window.alert(this.zwyciezca);
         }
       });
       return this.zwyciezca;
  }
 
     

};

window.onload = () => {
  let board: Board = new Board(3);

    

}