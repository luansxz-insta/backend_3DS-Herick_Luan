// Crie um perfil Profissional que
// interpole uma frase e um objeto com
// as características de um Profissional a sua escolha

// Criar objeto profissional 

// Criar variável com interpolação (template)

// imprimir perfilProfissional
const profissional = {
    nome: "Maria Silva"
    , profissão: "Veterinária"
    , experiência: "34 anos"
    , especialização: "Animais exóticos e silvestres"
    , cidade: "Curitiba"
}

const perfilProfissional = `\nOlá, meu nome é ${profissional.nome}. \nSou ${profissional.profissão} \ncom ${profissional.experiência} \nde experiência, especializada em ${profissional.especialização}, \ne atuo na cidade de ${profissional.cidade}.`

console.log(perfilProfissional)

