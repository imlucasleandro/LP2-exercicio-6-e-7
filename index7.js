const propriedade = "compartilhada"

const objeto1 = {
  [propriedade]: "Valor no objeto 1",
  propriedade2: "Propriedade2 no objeto 1"
}

const objeto2 = {
  [propriedade]: "Valor no objeto 2",
  propriedade2: "Propriedade2 no objeto 2"
}

console.log("Objeto 1:")
console.log(objeto1.compartilhada)
console.log(objeto1.propriedade2)

console.log("\nObjeto 2:")
console.log(objeto2.compartilhada)
console.log(objeto2.propriedade2) 
