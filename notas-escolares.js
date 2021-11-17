/* Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* entre 50 - 59   -   E
* menor que 60    -   F */

function getGrade(grade) {
  let gradeA = grade >= 90 && grade <= 100
  let gradeB = grade >= 80 && grade < 90
  let gradeC = grade >= 70 && grade < 80
  let gradeD = grade >= 60 && grade < 70
  let gradeE = grade >= 50 && grade < 60
  let gradeF = grade < 50 && grade >= 0
  let finalGrade

  if (gradeA) {
    finalGrade = 'A'
  } else if (gradeB) {
    finalGrade = 'B'
  } else if (gradeC) {
    finalGrade = 'C'
  } else if (gradeD) {
    finalGrade = 'D'
  } else if (gradeE) {
    finalGrade = 'E'
  } else if (gradeF) {
    finalGrade = 'F'
  } else {
    finalGrade = 'invalid'
  }
  return finalGrade
}

console.log(getGrade(105))
console.log(getGrade(35))
console.log(getGrade(56))
console.log(getGrade(62))
console.log(getGrade(71))
console.log(getGrade(88))
console.log(getGrade(99))
console.log(getGrade(51))
