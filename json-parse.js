// Sto leggendo dei dati da una sorgente esterna.
// So che mi arriveranno in formato JSON, cioè come una stringa JSON.

// Questo è JSON valido, JSON supporta gli oggetti e gli array come in JavaScript
let datiGrezzi = `[
  {"nome":"iPhone","prezzo":800},
  {"nome":"ASUS Laptop","prezzo":1500},
  {"nome":"Sony bluetooth headphones","prezzo":200}
]`

// Voglio visualizzare il nome e il prezzo di ogni prodotto
let products = JSON.parse(datiGrezzi)

for (let product of products) {
  console.log("Nome:", product.nome)
  console.log("Prezzo:", product.prezzo)
  console.log(".......................\n")
}
