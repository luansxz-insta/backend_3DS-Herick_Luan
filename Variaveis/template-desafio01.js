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

const perfilProfissional = `Olá, meu nome é ${profissional.nome}. Sou ${profissional.profissão} com ${profissional.experiência} de experiência, especializada em ${profissional.especialização}, e atuo na cidade de ${profissional.cidade}.`

console.log(perfilProfissional)

