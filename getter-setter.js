class Rettangolo {

  constructor(base, altezza) {
    this._base = base
    this._altezza = altezza
  }

  get base() {
    return this._base
  }

  get altezza() {
    return this._altezza
  }

  set base(b) {
    if (b <= 0) {
      console.error("Un rettangolo non può avere base negativa o 0")
    } else {
      this._base = b
    }
  }

  set altezza(a) {
    if (a <= 0) {
      console.error("Un rettangolo non può avere altezza negativa o 0")
    } else {
      this._altezza = a
    }
  }

    // Metodo getter
    get area() {
      // I metodi getter sono metodi senza parametri
      // che all'utilizzatore della classe sembreranno
      // proprietà.

      return this.base * this.altezza // In realtà questa riga stessa sta usando i metodi get base e get altezza
    }

    static help() {
      // Un metodo statico è un metodo che non dipende in nessun modo dall'istanza in cui mi trovo.
      // È un metodo della classe, non dell'istanza.
      console.log("Ciao, son la classe Rettangolo!")
      console.log("Istanziami con new, passandomi base e altezza.")
      console.log("In alternativa chiama la funzione Rettangolo.fromString passando una stringa!")
      console.log("Attenzione, non modificare mai le mie proprietà che iniziano con un _tratto _basso.\n")
      // Qua dentro, io NON POSSO USARE THIS, perché questo metodo non si riferisce a questa istanza
      // ma è un metodo di Rettangolo
    }

    static fromString(stringa) {
      // Input: una stringa fatta così
      // "26,12"

      // Output un nuovo rettangolo con base 26 e altezza 12

      let stringParts = stringa.split(',')
      let base = Number(stringParts[0])
      let altezza = Number(stringParts[1])
      return new Rettangolo(base, altezza)
    }
}

Rettangolo.help()

let rettangolo1 = new Rettangolo(10, 5)

console.log("Area:", rettangolo1.area)
console.log("Base:", rettangolo1.base) // In realtà qua sta usando il metodo getter, get base

rettangolo1.base = -20 // In realtà qua sta usando il metodo setter, set base

console.log("Ho modificato la base, nuova area:", rettangolo1.area)

let rettangolo2 = Rettangolo.fromString("12,25")
console.log("Area rettangolo 2:", rettangolo2.area)
