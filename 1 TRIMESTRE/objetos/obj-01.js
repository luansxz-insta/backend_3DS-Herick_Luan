// objetos são estruturas do tipo chave-valor
// podemos atribuir de forma dinâmica, assim como em arrays
// objetos tem indices nomeados
// podemos usar (for 0f) ou (for in)

const carros = {
    nome: "Camaro",
    modelo: "xpto Cam",
    cores: ["Amarelo", "preto"],
}
carros.modelo = "fusca"
carros["nome"] = "chev"
console.log(carros.modelo)
console.log(carros.nome)


// for(carro in carros){console.log(carro) }