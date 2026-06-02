// crie uma função sem parâmetros que imprima "carregando..." pelo menos 200 vezes e indique está função uma única vez
function carregando(){
    for(let i = 0; i < 200; i++){
        console.log("carregando...")
    }
}
carregando()
// crie uma função que receba 2 parâmetros(nomeAnimal, Tiposom) e imprima "O animal" = nomeAnimal + "emite o som" + Tiposom
function somAnimal(nomeAnimal, TipoSom){
    console.log("O animal " + nomeAnimal + " emite o som " + TipoSom)
}
somAnimal("cachorro", "Latido")
somAnimal("gato", "miado")
somAnimal("vaca", "mugido")
somAnimal("leão", "rugido")
somAnimal("pássaro", "canto")
somAnimal("cavalo", "relincho")
somAnimal("jacu", "grito")