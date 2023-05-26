// creazione interfaccia "smartphone"

interface Smartphone{
    //variabili interfaccia "smartphone"

    carica: number; //credito dello smartphone
    numeroChiamate: number; //chiamate effettuate
    costoMinuto: number; //costo della chiamata al minuto 
    registroChiamate: {id:number, durata:number, data:number, ora:number};

    //metodo della ricarica
    ricarica(euro:number):void;

    //metodo di visualizzazione del credito disponibile
    numero404():string;

    //metodo di visualizzazione del numero totale di chiamate
    getNumeroChiamate():number;

    //metodo di durata della chiamata
    chiamata(minuto:number):void;

    //metodo di azzeramento chiamate
    azzeraChiamate():void;
};


// creazione classe smartphone che implementa l'interfaccia precedentemente definita'
class smartphone implements Smartphone {
    //richiamo variabili
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    registroChiamate: { id: number; durata: number; data: number; ora: number; };

    //costruttore variabili
    constructor(carica:number, numeroChiamate: number, costoMinuto: number, registroChiamate:{id:number, durata:number, data:number, ora:number}){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = registroChiamate;
    }
    
    //definizione metodi:

    //1. metodo ricarica
    ricarica(euro: number): void {
        this.carica += euro;

        console.log(`Ricarica di € ${euro} eseguita`);
    }

    //2. metodo visualizzazione credito attuale
    numero404(): string {
        return `Il credito attuale e di € ${this.carica}`
    }
    
    //3. metodo visualizzazione delle chiamate totali
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    //4. metodo durata delle chiamate
    chiamata(minuto: number): void {
        this.costoMinuto = this.costoMinuto * minuto;
        console.log(`Il costo della chiamata effettuata e di € ${this.costoMinuto}`);
    }

    //5. metodo di azzeramento delle chiamate
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
        console.log(`le chiamate sono state azzerate`);
    }
};

//creazione prima istanza della classe
console.log("Primo Telefono");
let telefonoUno = new smartphone(18, 54, 0.20);

//visualizzazione dei metodi a seconda dei dati dell'istanza
telefonoUno.ricarica(15);
console.log(telefonoUno.numero404());
console.log("Le chiamate effettuate sono:", telefonoUno.getNumeroChiamate());
telefonoUno.chiamata(108);
telefonoUno.azzeraChiamate();
console.log(" ");

//creazione seconda istanza della classe
console.log("Secondo telefono");
let telefonoDue = new smartphone(20, 3, 0.15);

//visualizzazione dei metodi a seconda dei dati dell'istanza
telefonoDue.ricarica(7);
console.log(telefonoDue.numero404());
console.log("Le chiamate effettuate sono:", telefonoDue.getNumeroChiamate());
telefonoDue.chiamata(200);
telefonoDue.azzeraChiamate();
console.log(" ");

//creazione terza istanza della classe
console.log("Terzo telefono");
let telefonoTre = new smartphone(27, 42, 0.30);

//visualizzazione dei metodi a seconda dei dati dell'istanza
telefonoTre.ricarica(10);
console.log(telefonoTre.numero404());
console.log("Le chiamate effettuate sono:", telefonoTre.getNumeroChiamate());
telefonoTre.chiamata(34);
telefonoTre.azzeraChiamate();
console.log(" ");