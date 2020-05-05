



export class MyLocalStorage {
   myStorage ;
  constructor(){
    this.myStorage =localStorage
  }

    
   render(){
    // for(let i =0; i<localStorage.length; i++){
    //    let x =  JSON.parse(localStorage.getItem(localStorage[0])); 
    // }
    for (var x in localStorage){
        console.log(localStorage.getItem(x));
    }
   }

   
}