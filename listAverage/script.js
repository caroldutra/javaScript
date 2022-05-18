
studentList = [{name:"Carol", firstGrade:8, secondGrade:9}, 
{name:"Fernando", firstGrade:7, secondGrade:6}, 
{name:"Rafael", firstGrade:10, secondGrade:7}]

function averageCalc(firstGrade, secondGrade){
  return Number((firstGrade + secondGrade) / 2)
}

function accepted(student){
  let result = averageCalc(student.firstGrade,student.secondGrade)

  if(result >= 7){
    return `A média do(a) aluno(a) ${student.name} é: ${result}.
    Parabéns, ${student.name}! você passou no concurso.`
  } else {
    return `A média do(a) aluno(a) ${student.name} é: ${result}.
    Não foi dessa vez ${student.name}. Tente novamente.`
  }
}

for(student of studentList){
  alert(accepted(student))
}