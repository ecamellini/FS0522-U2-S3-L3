// Ereditarietà: cioè, si possono creare delle gerarchie di classi

class Animal {
  constructor(legs) {
    this.legs = legs
  }

  walk() {
    console.log(`This animal has ${this.legs} legs and it's walking!`)
  }
}

let animal4Legs = new Animal(4) // Animale a quattro zampe
console.log(animal4Legs.walk())


class Dog extends Animal {
  // Questa classe estende la classe Animal - è una sottoclasse.
  // Cosa vuol dire:
  // 1) Avrà tutte le proprietà di Animal
  // 2) Avrà tutti i metodi di Animal
  // 3) Posso riferirmi alla classe Animal (cioè la classe padre, superclasse) con la parola chiave super

  constructor() {
    super(4) // Chiamo il constructor della classe padre, cioè il constructor di Animal, e gli passo 4
  }

  bark() {
    console.log("Bau bau!")
  }

  walk() { // Override, cioè, sovrascrivo la funzionalità walk del padre.
    super.walk() // Faccio quello che farebbe il padre, Animal
    console.log("This animal is a dog!!!\n") // Faccio anche qualcosa in più
  }
}

let dog = new Dog()
dog.walk()
dog.bark()
