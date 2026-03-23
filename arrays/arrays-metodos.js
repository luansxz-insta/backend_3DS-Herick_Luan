// crie um array que contenha 3 frutas
// adicione 4 frutas com o método .push(<nomefruta>)
// remova a última fruta com o método .pop()
// faça um loop for que remova todas as frutas
// verifique, se todas as frutas foram removidas
// imprima "nenhuma fruta encontrada"

const frutas = ["banana", "maçã", "laranja"]
// console.log(frutas)
frutas.push("uva")
frutas.push("abacaxi")
frutas.push("manga")
frutas.push("pera")

// console.log(frutas)
frutas.pop()
// console.log(frutas)
console.log(frutas.length) // comprimento desse array
while (frutas.length > 0) {
    frutas.pop()
    if(frutas.length == 0){
        console.log("não há frutas para vender!!!")
    }
}
console.log(frutas)
console.log(frutas.length)
