console.log('Random Number Generator Game');

//Generating a random number
let randomNumber:number = Math.floor(Math.random() * (100-1)+1);
console.log('The random number is '+ randomNumber);



function calculateWinner():any {

    //1st player guess
    let firstPlayer:number = 48;
    console.log('The first player guess is '+ firstPlayer);

    //2nd player guess
    let secondPlayer:number = 73;
    console.log('The second player guess is '+ secondPlayer);

    if (firstPlayer === randomNumber) {
        console.log('The first player wins!');
    } else if (secondPlayer === randomNumber) {
        console.log('The second player wins!');
    } else if (firstPlayer > secondPlayer && firstPlayer < randomNumber || firstPlayer > randomNumber) {
       console.log('No one wins! But the first player almost succeeded.');
    } else if (secondPlayer > firstPlayer && secondPlayer < randomNumber || secondPlayer > randomNumber) {
        console.log('No one wins! But the second player almost succeeded.');
    }
}

calculateWinner();


