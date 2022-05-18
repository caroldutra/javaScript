/*
  **Jogo da adivinhação**

  Apresentar mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Criar uma lógica para gerar um número aletório e 
  verificar se o número digitado é o mesmo que o aleatório 
  gerado pelo sistema.

  Enquanto o usuário não advinhar o número, mostrar a mensagem:
  "Erro, tente novamente!"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substituir o "x" da mensagem pelo npumero de tentativas

*/

while(true){
  let option = Number(prompt("Advinhe o número que estou pensando? Está entre 0 e 10"))
  const randomNumber = Math.round(Math.random()*10)
  let xAttempts = 1

  while(option!=randomNumber){
    option = prompt("Erro, tente novamente!")
    xAttempts++
  }

  let restart = prompt(`Parabéns, você adivinhou em ${xAttempts} tentativas!

  Deseja tentar novamente? Digite o número da opção desejada.

  1- Sim
  2- Não`)

  if (restart==2) {
    break
  } else if (restart!=1){
    restart = prompt(`Opção inválida! Deseja tentar novamente? Digite o número da opção desejada.

    1- Sim
    2- Não `)
  } else {
    continue
  }
}




