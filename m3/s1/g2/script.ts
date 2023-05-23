//classe conto corrente madre

class sonAccount {
    balance:number;


    constructor(balance:number){
        this.balance = balance;
    }

    public payments(amount:number):void{
        this.balance += amount;
        console.log(`Payment successful of: ${amount} `);
        this.printBalance();
    }

    public withdraws(amount:number):void{
        if(this.balance >= amount){
            this.balance -= amount;
            console.log(`Withdraw of : ${amount} was successful`);
            this.printBalance();
        }else{
            console.log('Insufficient funds');
        }
    }

    public printBalance():void{
        console.log(`Bank account balance of: ${this.balance}`);
    }
}


class motherAccount extends sonAccount {

    interestRate:number = 10;

    constructor(balance:number, interestRate:number){
        super(balance);
        this.interestRate = interestRate;
    }

    public rateCalculation():void{
        let interests = this.balance * (this.interestRate / 100);
        this.balance += interests;
        console.log(`The total of interests accumulated until now is: ${interests}`);
        this.printBalance();
    }






}

let buddyAccount = new sonAccount(0);
buddyAccount.payments(1000);

let mamaAccount = new motherAccount(0, 10);
mamaAccount.payments(400);
mamaAccount.withdraws(800);
