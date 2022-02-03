let idade = 27
let paisPresentes = false
let comprouBilhete = true
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(`pode viajar: ${podeViajar}`)

// let msgMaiorIdade = ""
// if(idade >= 18){
//     msgMaiorIdade = "É maior de idade"
// } else {
//     msgMaiorIdade = "É menor de idade"
// }
let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de idade"

if(!comprouBilhete){
   console.log("não comprou o bilhete")
} else {
   console.log(msgMaiorIdade)
}

let n1 = 10
let n2 = 10
let media = (n1 + n2) / 2 
console.log(`media: ${media}`)


if(n1 === 0 || n2 === 0) {
    console.log("Reprovado")
} else if(media < 7) {
     console.log("Reprovado. Mas há como recuperar")
} else {
    console.log("Aprovado")
}

console.log("Saiu do bloco if")
