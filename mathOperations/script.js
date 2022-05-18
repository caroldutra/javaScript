
let firstName = prompt("Digite o seu nome :)");

alert (`Olá ${firstName}!
Vamos realizar algumas operações matemáticas?!`)

let firstNumber = Number(prompt("Digite o primerio número:"))
let secondNumber = Number(prompt("Digite o segundo número:"))

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

function evenOdd() {
  if (sum%2==0){
    return "par"
  } else {
    return "ímpar"
  }
}

function equalNoequal() {
  if (firstNumber==secondNumber){
    return "iguais"
  } else {
    return "diferentes"
  }
}

alert (`A soma dos números é: ${sum}
A subtração dos dois números é: ${sub}
A multiplicação dos dois números é: ${multi}
A divisão dos dois números é: ${div.toFixed(2)}
O resto da divisão dos dois números é: ${restDiv}
A soma dos dois números é ${evenOdd()}
Os números inseridos são ${equalNoequal()}`)