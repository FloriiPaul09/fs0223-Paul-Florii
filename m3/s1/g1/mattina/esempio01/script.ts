console.log('Ciao!');


let nome:string = 'Mario';
let anni:number = 26;
let boolean:boolean = false;
let array:any[] = [20, false, 'text'];
let arrayString:string[] = ['string'];
let arrayNumber:number[] = [45, 75, 22];

let empty:undefined|number;

empty = 45;


function saluto():void{
    console.log('Ciaoo!');
}

saluto();

function restituisciSaluto():string{
    return 'Ciaoo';
}
