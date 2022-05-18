
/* Solicitar o nome do aluno e as 3 notas 
do bimestre e calcular a média dele.

A média positiva deverá ser maior que 6

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno não passar, motivar o aluno a dar o seu melhor

Em ambos os casos mostrar uma mensagem com o nome do aluno e a nota
*/

let studentName = prompt("Qual o seu nome?")
let n1 = prompt("Qual foi a sua primeira nota?")
let n2 = prompt("Qual foi a sua segunda nota?")
let n3 = prompt("Qual foi a sua terceira nota?")

let average = (Number(n1) + Number(n2) + Number(n3))/3
average = average.toFixed(2)

if (average > 6) {
  alert("Parabéns, " + studentName + "! Você passou. Sua média é: " + average)
} else if (average > 3) {
  alert(studentName + ", estude mais para a prova de recuperação. Sua média é: " + average)
} else {
  alert(studentName + ", infelizmente você não passou. Sua média é: " + average)
}

