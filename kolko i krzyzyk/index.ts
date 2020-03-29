class Cell {
public Num:number
  constructor (public num: number ){
      this.Num = num;
      
  }
public clickCell(){
  console.log(this.Num);
}
}


class Board {
     public tab = Cell[9];
     constructor (t : Cell[]){
         this.tab = t ;
     }

}

window.onload = () => {
    let cell1 = new Cell(1);
    let cell2 = new Cell(2);
    let cell3 = new Cell(3);
    let cell4 = new Cell(4);
    let cell5 = new Cell(5);
    let cell6 = new Cell(6);
    let cell7 = new Cell(7);
    let cell8 = new Cell(8);
    let cell9 = new Cell(9);
    let cell11: HTMLElement = <HTMLElement>document.getElementById("cell11");
    let cell12: HTMLElement  = <HTMLElement>document.getElementById("cell12");
    let cell13: HTMLElement  = <HTMLElement>document.getElementById("cell13");
    let cell21: HTMLElement  = <HTMLElement>document.getElementById("cell21");
    let cell22: HTMLElement  = <HTMLElement>document.getElementById("cell22");
    let cell23: HTMLElement  = <HTMLElement>document.getElementById("cell23");
    let cell31: HTMLElement  = <HTMLElement>document.getElementById("cell31");
    let cell32: HTMLElement  = <HTMLElement>document.getElementById("cell32");
    let cell33: HTMLElement  = <HTMLElement>document.getElementById("cell33");

     let board :Board = new Board( [cell1 ,cell2, cell3, cell4 ,cell5, cell6, cell7 ,cell8, cell9, ]);

     cell11.onclick = (e) => { cell1.clickCell()}
     cell12.onclick = (e) => { cell2.clickCell()}
     cell13.onclick = (e) => { cell3.clickCell()}
     cell21.onclick = (e) => { cell4.clickCell()}
     cell22.onclick = (e) => { cell5.clickCell()}
     cell23.onclick = (e) => { cell6.clickCell()}
     cell31.onclick = (e) => { cell7.clickCell()}
     cell32.onclick = (e) => { cell8.clickCell()}
     cell33.onclick = (e) => { cell9.clickCell()}
     
    

}