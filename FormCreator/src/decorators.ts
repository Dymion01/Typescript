 

export function LogMethod( target: object , propKey: string ,descriptor: PropertyDescriptor): void{

     console.log("LOGMETHOD: " ,target , propKey , descriptor);

    }



 export function LogProp(target: any , propName: string): void{
     console.log( "LOGPROP: " , target , propName);
 }