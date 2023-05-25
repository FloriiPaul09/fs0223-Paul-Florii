var capoAbbigliamento = /** @class */ (function () {
    function capoAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    capoAbbigliamento.prototype.mostraPrezzo = function () {
        var prezzoFormattato = this.prezzoivainclusa.toFixed(2);
        return "".concat(prezzoFormattato, " \u20AC");
    };
    return capoAbbigliamento;
}());
var camicia = new capoAbbigliamento(54, 125, "estiva", "camicia", 34, 2, "azzurro", 28.00, 34.16, "negozio", 68.32);
console.log(camicia);
console.log(camicia.mostraPrezzo());
