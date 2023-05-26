// creazione interfaccia "smartphone"
;
// creazione classe smartphone che implementa l'interfaccia precedentemente definita'
var smartphone = /** @class */ (function () {
    //costruttore variabili
    function smartphone(carica, numeroChiamate, costoMinuto, registroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = registroChiamate;
    }
    //definizione metodi:
    //1. metodo ricarica
    smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
        console.log("Ricarica di \u20AC ".concat(euro, " eseguita"));
    };
    //2. metodo visualizzazione credito attuale
    smartphone.prototype.numero404 = function () {
        return "Il credito attuale e di \u20AC ".concat(this.carica);
    };
    //3. metodo visualizzazione delle chiamate totali
    smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    //4. metodo durata delle chiamate
    smartphone.prototype.chiamata = function (minuto) {
        this.costoMinuto = this.costoMinuto * minuto;
        console.log("Il costo della chiamata effettuata e di \u20AC ".concat(this.costoMinuto));
    };
    //5. metodo di azzeramento delle chiamate
    smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        console.log("le chiamate sono state azzerate");
    };
    return smartphone;
}());
;
//creazione prima istanza della classe
console.log("Primo Telefono");
var telefonoUno = new smartphone(18, 54, 0.20);
//visualizzazione dei metodi a seconda dei dati dell'istanza
telefonoUno.ricarica(15);
console.log(telefonoUno.numero404());
console.log("Le chiamate effettuate sono:", telefonoUno.getNumeroChiamate());
telefonoUno.chiamata(108);
telefonoUno.azzeraChiamate();
console.log(" ");
//creazione seconda istanza della classe
console.log("Secondo telefono");
var telefonoDue = new smartphone(20, 3, 0.15);
//visualizzazione dei metodi a seconda dei dati dell'istanza
telefonoDue.ricarica(7);
console.log(telefonoDue.numero404());
console.log("Le chiamate effettuate sono:", telefonoDue.getNumeroChiamate());
telefonoDue.chiamata(200);
telefonoDue.azzeraChiamate();
console.log(" ");
//creazione terza istanza della classe
console.log("Terzo telefono");
var telefonoTre = new smartphone(27, 42, 0.30);
//visualizzazione dei metodi a seconda dei dati dell'istanza
telefonoTre.ricarica(10);
console.log(telefonoTre.numero404());
console.log("Le chiamate effettuate sono:", telefonoTre.getNumeroChiamate());
telefonoTre.chiamata(34);
telefonoTre.azzeraChiamate();
console.log(" ");
