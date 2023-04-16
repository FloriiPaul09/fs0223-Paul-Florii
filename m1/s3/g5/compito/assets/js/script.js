/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

{
    let a = 10;
    let b = 20;
    let sum = a + b;
    console.log(sum);
}

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

{
    let random = Math.floor(Math.random() * 20) + 1;
    console.log(random);
}

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

{
    let me = {
        name: 'Paul',
        surname: 'Florii',
        age: 21
    }
    console.log(me);

    /* ESERCIZIO D
    Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
    */

    delete me.age;
    console.log(me);

    /* ESERCIZIO E
    Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
    */

    me.skills = ['HTML', 'CSS', 'JavaScript'];
    console.log(me);

    /* ESERCIZIO F
    Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
    */

    me.skills.push('PHP');
    console.log(me);

    /* ESERCIZIO G
    Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
    */

    me.skills.pop();
    console.log(me);

}

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

{
    let dice = () => Math.floor(Math.random() * 6) + 1;
    console.log(dice());
}

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

{
    let whoIsBigger = (a, b) => a > b ? a : b;
    console.log(whoIsBigger(30, 15));
}

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

{
    let splitMe = (str) => str.split(' ');
    console.log(splitMe("Questa frase è splittata"));
}

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

{
    let deleteOne = (str, bool) => {
        if (bool === true) {
            return str.slice(1);
        } else {
            return str.slice(0, -1);
        }
    }
    console.log(deleteOne("Supercalifragilistichespiralidoso", true));
}

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

{
    let onlyLetters = (str) => str.replace(/[0-9]/g, '');
    console.log(onlyLetters("It is Five not 5"));
}

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

{
    let isThisAnEmail = (email) => {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
    console.log(isThisAnEmail("ychagexamplecom"));
}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

{
    let whatDayIsIt = () => {
        let today = new Date();
        let day = today.getDay();
        let month = today.getMonth();
        let year = today.getFullYear();
        if (day === 0) {
            day = 7;
        }
        if (month === 0) {
            month = 11;
        }
        return {
            day: day,
            month: month,
            year: year
        }

    }
    console.log(whatDayIsIt());
}
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

{
    let dice = () => Math.floor(Math.random() * 6) + 1;

    let rollTheDices = (n) => {
        sum = 0;
        values = [];
        for (let i = 0; i < n; i++) {
            sum += dice();
            values.push(dice());
        }
        return {
            sum: sum,
            values: values
        }
    }
    console.log(rollTheDices(5));
}

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

{
    let howManyDays = (data) => {
        let now = new Date().getTime;
        let diff = now - new Date(data).getTime();
        let day = Math.floor(diff / (1000 * 60 * 60 * 24));
        return day;
    }
    let day = new Date(2023, 03, 13);
    console.log(day);
}

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

{
    let isTodayMyBirthday = (days, months) => {
        let today = new Date();
        let monthDay = today.getMonth() + 1;
        let day = today.getDate

        if (day === days && monthDay === months) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }
    isTodayMyBirthday(09, 10);
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

{


    let deleteProp = (obj, prop) => {
        delete obj[prop];
        return obj;
    }
    console.log(deleteProp({
        parola: 'Non so cosa scrivere',
        numero: 9,
        quote: 'A...rise now, ye tarnished'
    }, "parola"));

}

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

{
    const movies = [{
            Title: 'The Lord of the Rings: The Fellowship of the Ring',
            Year: '2001',
            imdbID: 'tt0120737',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
        },

        {
            Title: 'The Lord of the Rings: The Return of the King',
            Year: '2003',
            imdbID: 'tt0167260',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
            Title: 'The Lord of the Rings: The Two Towers',
            Year: '2002',
            imdbID: 'tt0167261',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
            Title: 'Lord of War',
            Year: '2005',
            imdbID: 'tt0399295',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
        },
        {
            Title: 'Lords of Dogtown',
            Year: '2005',
            imdbID: 'tt0355702',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
        },
        {
            Title: 'The Lord of the Rings',
            Year: '1978',
            imdbID: 'tt0077869',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        },
        {
            Title: 'Lord of the Flies',
            Year: '1990',
            imdbID: 'tt0100054',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
        },
        {
            Title: 'The Lords of Salem',
            Year: '2012',
            imdbID: 'tt1731697',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
        },
        {
            Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
            Year: '1984',
            imdbID: 'tt0087365',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
        },
        {
            Title: 'Lord of the Flies',
            Year: '1963',
            imdbID: 'tt0057261',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
        },
        {
            Title: 'The Avengers',
            Year: '2012',
            imdbID: 'tt0848228',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        },
        {
            Title: 'Avengers: Infinity War',
            Year: '2018',
            imdbID: 'tt4154756',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
        },
        {
            Title: 'Avengers: Age of Ultron',
            Year: '2015',
            imdbID: 'tt2395427',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
        },
        {
            Title: 'Avengers: Endgame',
            Year: '2019',
            imdbID: 'tt4154796',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
        },
    ]

    let newestMovie = (movies) => {
        return movies.sort((a, b) => b.Year - a.Year).slice(0, 1);

    }

    console.log(newestMovie(movies));


    /* ESERCIZIO 13
      Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
    */


    let countMovies = (movies) => {

        let count = movies.reduce((c, movies) => movies.Type === 'movie' ? c + 1 : c, 0);
        return count;
    }
    console.log(countMovies(movies));


    /* ESERCIZIO 14
      Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
    */

    let onlyTheYears = (movies) => {

        let years = movies.reduce((years, movies) => {
            if (movies.Type === 'movie') {
                years.push(movies.Year);
            }
            return years;
        }, []);
        return years;
    }
    console.log(onlyTheYears(movies));

    /* ESERCIZIO 15
      Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
    */

    let onlyInLastMillennium = (movies) => {
        let moviesLastMillenium = [];


    }
    console.log(onlyInLastMillennium());

    /* ESERCIZIO 16
    Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
    */

    let sumAllTheYears = (movies) => {
        sum = 0;

        for (let i = 0; i < movies.length; i++) {
            sum += +movies[i].Year;
        }
        return sum;
    }
    console.log(sumAllTheYears(movies));

    /* ESERCIZIO 17
    Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
    */

    let searchByTitle = (movies, title) => {
        let result = [];
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].Title === title) {
                result.push(movies[i]);
            }
        }
        return result;
    }
    console.log(searchByTitle(movies, 'The Lords of Salem'));

    /* ESERCIZIO 18
    Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
    "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
    */

    let searchAndDivide = (movies, title) => {
        let match = [];
        let unmatch = [];
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].Title === title) {
                match.push(movies[i]);
            } else {
                unmatch.push(movies[i]);
            }
        }
        return {
            match: match,
            unmatch: unmatch
        }
    }
    console.log(searchAndDivide(movies, 'The Lords of Salem'));

    /* ESERCIZIO 19
    Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
    */

    let removeIndex = (movies, index) => {

    }



}
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
{
    function idSelector() {
        let container = document.getElementById('container')
        container.innerHTML = ''
    }
    idSelector();
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

{
    function selectorTable() {
        let tdTable = document.querySelectorAll('td');
    }
    selectorTable();
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

{
    function containerTable() {
        let tdTable = document.querySelectorAll('td');
        for (let i = 0; i < tdTable.length; i++) {
            console.log(tdTable[i].innerHTML);
        }
    }
    containerTable();
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

{
    function backgroundTable() {
        let anchor = document.querySelectorAll('a');
        for (let i = 0; i < anchor.length; i++) {
            anchor[i].style.backgroundColor = 'rgb(255, 0, 0)';
        }
    }
    backgroundTable();
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

{
    function addElement(n) {
        let list = document.querySelectorAll('li');
        for (let i = 0; i < list.length; i++) {
            let li = list[i];
            li.id = 'myList';
        }

    }
    addElement(4);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

{
    function removeElement(n) {
        let remove = document.getElementById('myList');
        for (let i = 0; i < remove.length; i++) {
            li.parentNode.removeChild(remove[i]);
        }
    }
    removeElement(4);
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

{
    function addClass() {
        let tr = document.querySelectorAll('tr');
        for (let i = 0; i < tr.length; i++) {
            tr[i].classList.add('test');
        }
    }
    addClass();
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

{
    function halfTree(n) {
        let particle = '';
        for (let i = 1; i <= n; i++) {

            for (k = 0; k < i; k++) {
                particle += '*';
            }
            particle += '\n';
        }
        return particle;
    }
    console.log(halfTree(3));

}

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
{
    function tree(n) {
        let particle = '';
        for (let i = 1; i <= n; i++) {
            for (let j = 0; j <= n - i; j++) {
                particle += ' ';
            }
            for (k = 0; k < (i * 2) - 1; k++) {
                particle += '*';
            }
            particle += '\n';
        }
        return particle;
    }
    console.log(tree(3));
}




/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

{
    function isItPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    console.log(isItPrime(23));
}

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [{
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },

    {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'Lords of Dogtown',
        Year: '2005',
        imdbID: 'tt0355702',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
        Title: 'The Lords of Salem',
        Year: '2012',
        imdbID: 'tt1731697',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
]