//classe conto corrente madre
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sonAccount = /** @class */ (function () {
    function sonAccount(balance) {
        this.balance = balance;
    }
    sonAccount.prototype.payments = function (amount) {
        this.balance += amount;
        console.log("Payment successful of: ".concat(amount, " "));
        this.printBalance();
    };
    sonAccount.prototype.withdraws = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Withdraw of : ".concat(amount, " was successful"));
            this.printBalance();
        }
        else {
            console.log('Insufficient funds');
        }
    };
    sonAccount.prototype.printBalance = function () {
        console.log("Bank account balance of: ".concat(this.balance));
    };
    return sonAccount;
}());
var motherAccount = /** @class */ (function (_super) {
    __extends(motherAccount, _super);
    function motherAccount(balance, interestRate) {
        var _this = _super.call(this, balance) || this;
        _this.interestRate = 10;
        _this.interestRate = interestRate;
        return _this;
    }
    motherAccount.prototype.rateCalculation = function () {
        var interests = this.balance * (this.interestRate / 100);
        this.balance += interests;
        console.log("The total of interests accumulated until now is: ".concat(interests));
        this.printBalance();
    };
    return motherAccount;
}(sonAccount));
var buddyAccount = new sonAccount(0);
buddyAccount.payments(1000);
var mamaAccount = new motherAccount(0, 10);
mamaAccount.payments(400);
mamaAccount.withdraws(800);
