//import { alugarFilme, devolverFilme } from './mod-esm-videos'
import * as Videoteca from './mod-esm-videos.js'

console.log(Videoteca.alugarFilme('Michael', '10-07-2026', '59,00'))
console.log(Videoteca.devolverFilme('Michael', '18-07-2026'))
console.log(Videoteca.alugarFilme('Gladiador', '21-08-2026', '79,99'))
console.log(Videoteca.devolverFilme('Gladiador', '27-08-2026'))