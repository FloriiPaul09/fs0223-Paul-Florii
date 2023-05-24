"use strict";
class SingoloLavoratoreAutonomo {
    constructor(redditoAnnuoLordo) {
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }
    calcoloInps() {
        let aliquotaInps = 0.9;
        let tasseInps = this.redditoAnnuoLordo * aliquotaInps;
        return tasseInps;
    }
    calcoloIrpef() {
        let aliquotaIrpef = 0.34;
        let tasseIrpef = this.redditoAnnuoLordo * aliquotaIrpef;
        return tasseIrpef;
    }
    calcoloTasse() {
        let tasseInps = this.calcoloInps();
        let tasseIrpef = this.calcoloIrpef();
        let totTasse = tasseInps + tasseIrpef;
        return totTasse;
    }
}
class Lavoratore extends SingoloLavoratoreAutonomo {
    codiceRedditivita() {
        let coddRedd = 5000;
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
//# sourceMappingURL=script.js.map