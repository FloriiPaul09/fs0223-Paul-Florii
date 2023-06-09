class capoAbbigliamento {
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;

    constructor(
        id:number,
        codprod:number,
        collezione:string,
        capo:string,
        modello:number,
        quantita:number,
        colore:string,
        prezzoivaesclusa:number,
        prezzoivainclusa:number,
        disponibile:string,
        saldo:number
    ){
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }


    mostraPrezzo():string {
        let prezzoFormattato = this.prezzoivainclusa.toFixed(2);
        return `${prezzoFormattato} €`
    }
}
// let camicia = new capoAbbigliamento(
//     54,
//     125,
//     "estiva",
//     "camicia",
//     34,
//     2,
//     "azzurro",
//     28.00,
//     34.16,
//     "negozio",
//     68.32
// );

// console.log(camicia);
// console.log(camicia.mostraPrezzo());

fetch("Abbigliamento.json")
    .then(response => response.json())
    .then(data => {
        const capiAbbigliamento: capoAbbigliamento[] = [];

        data.array.forEach((element:any) => {
            const capo: capoAbbigliamento = new capoAbbigliamento(
                element.id,
                element.codprod,
                element.collezione,
                element.capo,
                element.modello,
                element.quantita,
                element.colore,
                element.prezzoivaesclusa,
                element.prezzoivainclusa,
                element.disponibile,
                element.saldo
            );
            
            capiAbbigliamento.push(capo);
        });
        console.log(capiAbbigliamento);
    })
    .catch(err => {
        console.log("Error", err);
    });
