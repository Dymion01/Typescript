let runda = 1;
// let  zwyciezca  = null;
  const listaRuchow : Array<string> = [
  "" , "" , "" ,
  "" , "" , "" ,
  "" , "" , "" 
 ];

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
      Size : number;
      
     constructor (num )
     {
        this.Size = num;

       var cells :Cell[]=[];
        
        this.SetConbinatoions(num);
        for(let i = 0 ; i< num*num; i ++){
          cells[i] = new Cell(i);
          
        }
        console.log(cells);
        let doc = document.getElementById("playGround");
        let board = document.createElement('table');
        board.id = "table";
        
        
        for (let i  =0 ; i < num  ; i++) {
              let tr = document.createElement('tr');
              for(let j = 0 ; j< num ; j++){
                let td = document.createElement('td');
                td.classList.add("fa");
                td.classList.add("box")
                td.id = ("cell" + i+j);
                if(td.id = ("cell" + i+j)) {
                td.onclick = (e) =>{cells[this.Size*(i) + j].clickCell(td) ,this.Check()};
                };
                tr.appendChild(td);
                console.log(td);
              };
              board.appendChild(tr);
        };
        doc.appendChild(board);
 
     };
     
       zwyciezca  = null;
       public kombinacje: number[][] ;
     SetConbinatoions(x :number){
       switch (x){
         case 3:
          this.kombinacje = [
            [0,1,2] , [3,4,5] , [6,7,8] ,
            [0,3,6] , [1,4,7] , [2,5,8] , 
            [0,4,8] , [2,4,6] 
          ];
          console.log(this.kombinacje);
          break;
         case 4:
           this.kombinacje = [
             [0,1,2] , [1,2,3] , [4,5,6] , [5,6,7] , [8,9,10] ,
             [9,10,11] , [12,13,14] , [13,14,15] , [0,4,8] , [1,5,9] , 
             [2,6,10] , [3,7,11] , [4,8,12] , [5,9,13] , [6,10,14] , 
             [7,11,15] , [1,6,11] , [0,5,10] , [5,10,15] , [4,9,14] , 
             [2,5,8] , [3,6,9] , [6,9,12] , [7,10,13]
           ]; 
           console.log(this.kombinacje);
           break;
       };
     };

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
         if(moves["fa-circle-o"].length + moves["fa-times"].length == (this.Size*this.Size) ) {
          this.zwyciezca = "Remis!";
          window.alert(this.zwyciezca);
         }
       });
       return this.zwyciezca;
  };
 
     

};
 let playGround = document.getElementById("playGround");
 let table = document.getElementById("table")
 document.getElementById("button3").onclick = (e) => new Board(3);
 document.getElementById("button4").onclick = (e) => new Board(4);
