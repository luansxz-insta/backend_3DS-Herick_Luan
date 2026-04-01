// Crie 4 funções para operações (+, -, *, /)
// Calcula e imprime resultados

function subtracao(n1, n2){
       const resultado = n1 - n2
       console.log("Resultado da subtração: " + resultado)
    }

// invocação
subtracao(5, 2)
subtracao(50, 10)

function adição(n1, n2){
       const resultado = n1 + n2
       console.log("Resultado da Adição: " + resultado)
    }

// invocação
adição(300, 155)
adição(1000, 500)

function multiplicação(n1, n2){
       const resultado = n1 * n2
       console.log("Resultado da multiplicação: " + resultado)
    }

// invocação
multiplicação(12, 6)
multiplicação(240, 120)

function divisão (n1, n2){
    if(n2 === 0){
        console.log("Erro: Divisão por zero não é permitida.")
    }
    else{
        const resultado = n1 / n2
        console.log("Resultado da divisão: " + resultado)
    }
}
        // invocação
divisão(10, 5)
divisão(25, 0)
