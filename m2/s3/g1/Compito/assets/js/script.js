// esercizio 1

class utenti {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    };

    greet() {
        return "My name is " + this.firstName + " " +
            this.lastName + " " + "I am " + this.age + " " + "years old" +
            " " + "and i live in" + " " + this.location;
    }
};

const firstUtente = new utenti("Giovanni", "Rossi", "20", "Milano");
console.log(firstUtente.greet());

const secondUtente = new utenti("Anna", "Teresa", "23", "Trieste");
console.log(secondUtente.greet());

if (firstUtente.age > secondUtente.age) {
    let result = "The first user is older than the second user";
    console.log(result);
} else if (firstUtente.age < secondUtente.age) {
    let result = "The second user is older then the second user";
    console.log(result);
}


// esercizio 2

class pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    petInfo() {
        return "The pet name is " + this.petName + " and the owner is " + this.ownerName +
            " the species is a " + this.species + " and the breed is a " + this.breed;
    }

}

const firstPet = new pet("Rex", "Jack", "Dog", "Labrador");
console.log(firstPet.petInfo());

const secondPet = new pet("Ferrin", "Jack", "Cat", "Maine Coon");
console.log(secondPet.petInfo());