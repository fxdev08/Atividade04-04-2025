//contribuidores: Emanoel,Felipe Xavier(eu), Gilsimar, João Paulo e Raphael Alves

var prompt = require("prompt-sync")();
console.clear()

function numeroaleatorio(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let contFacil = 0
let contMedio = 0
let contDificil = 0

const facil = numeroaleatorio(1, 10)
const medio = numeroaleatorio(1, 50)
const dificil = numeroaleatorio(1, 100)
let numero;

console.log("1- Fácil\n2- Médio\n3- Difícil")
let nivel = parseInt(prompt("Escolha uma opção: "))

switch(nivel){

    case 1:
        while(contFacil <= 4 ){
            numero = parseInt(prompt("Digite seu palpite: "))

            if(numero < facil){
                console.log("Muito Baixo !")
                  
             }
             else if(numero > facil){
                
                console.log("Muito Alto !")
             }
             else if (numero == facil){
                console.log(`Parabéns, você adivinhou o numero em ${contFacil} tentativas`)
                return
             }
             contFacil ++
        }
         
        console.log(`O número era: ${facil}`)
        
    break
    case 2:
        while(contMedio <= 6 || numero == medio){
            numero = parseInt(prompt("Digite seu palpite: "))

            if(numero <  medio){
                console.log("Muito Baixo !")
                  
             }
             else if(numero >  medio){
                console.log("Muito Alto !")
             }
             else if (numero ==  medio){
                console.log(`Parabéns, você adivinhou o numero em ${contMedio} tentativas`)
                return
             }
             contMedio ++ 
        }
        console.log(`O número era: ${ medio}`)
        
    break
    case 3:
        while(contDificil <= 9|| numero == dificil){
            numero = parseInt(prompt("Digite seu palpite: "))

            if(numero <   dificil){
                console.log("Muito Baixo !")
                 
             }
             else if(numero >   dificil){
                console.log("Muito Alto !")
             }
             else if (numero ==   dificil){
                console.log(`Parabéns, você adivinhou o numero em ${contDificil} tentativas`)
                return
             }
             contDificil ++  
        }
        console.log(`O número era: ${ dificil}`)
        
    break
    default:
        console.log("Nível inválido !!!")

}



