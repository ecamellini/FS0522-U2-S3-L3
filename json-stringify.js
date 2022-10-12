class Product {
  constructor(nome, prezzo) {
    this.nome = nome
    this.prezzo = prezzo
  }
}

let products = [
  new Product("iPhone", 800),
  new Product("ASUS Laptop", 1500),
  new Product("Sony bluetooth headphones", 200)
]

// Quando lavoro con il JSON, sto lavorando con una stringa.
// Che vuol dire che se una API o uno storage di dati vuole che io salvi i
// dati in formato stringa, il formato JSON va bene.
// Quando parlo HTTP devo inviare delle stringhe, quindi converto i dati
// in stringhe JSON.
let productsJson = JSON.stringify(products)
console.log(productsJson)

console.log(productsJson === `[{"nome":"iPhone","prezzo":800},{"nome":"ASUS Laptop","prezzo":1500},{"nome":"Sony bluetooth headphones","prezzo":200}]`)
