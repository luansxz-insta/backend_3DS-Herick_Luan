// funções de retorno exigem a 
// clássula/termo 'return'
// isso permite fazer operações 
// sequenciais com o resultado 
// armazenar funções em variáveis
// sequenciais com o resultado, armazenar funções em variáveis, etc

function sobraDoSalario(meuSalario){
    const contaDeLuz = 150.00
    const aluguel = 1400.00
    const resto = meuSalario - (contaDeLuz+aluguel)
    console.log(`O que restou no fim do mês ${resto}`)
    return resto
}
const salario = sobraDoSalario(5000.00)
console.log(`O que sobrou do salário foi ${salario}`)
sobraDoSalario(3000.00)