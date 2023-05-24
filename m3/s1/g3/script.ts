abstract class SingoloLavoratoreAutonomo{
    protected redditoAnnuoLordo:number;

    constructor(redditoAnnuoLordo:number) {
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }

    abstract codiceRedditivita():number;

    calcoloInps():number{
        let aliquotaInps:number = 0.9;
        let tasseInps = this.redditoAnnuoLordo * aliquotaInps;
        return tasseInps;
    }

    calcoloIrpef():number {
        let aliquotaIrpef:number = 0.34;
        let tasseIrpef = this.redditoAnnuoLordo * aliquotaIrpef;
        return tasseIrpef;
    }

    calcoloTasse():number {
        let tasseInps = this.calcoloInps();
        let tasseIrpef = this.calcoloIrpef();
        let totTasse = tasseInps + tasseIrpef;
        return totTasse;
    }
}


class Lavoratore extends SingoloLavoratoreAutonomo{

    codiceRedditivita(): number {
        let coddRedd:number = 5000;
        return coddRedd;
    }
}

let redditoAnnuoLordo = 36000;
let worker = new Lavoratore(redditoAnnuoLordo);
let tasseInps = worker.calcoloInps();
let tasseIrpef = worker.calcoloIrpef();
let totTasse = worker.calcoloTasse();

console.log(`Il lavoratore con reddito annuo di ${redditoAnnuoLordo} dovrà pagare: 
€ ${totTasse} di tasse, di cui: 
    € ${tasseInps} di tasse INPS;
    € ${tasseIrpef} di tasse IRPEF;`);
