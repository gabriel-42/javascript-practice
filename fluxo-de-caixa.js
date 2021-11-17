/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. */
let finance = {
  income: [200, 1100, 50, 10],
  outcome: [700, 150, 100, 160, 300]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }
  return total
}
function calculateBalance() {
  const calculateIncome = sum(finance.income)
  const calculateOutcome = sum(finance.outcome)

  const total = calculateIncome - calculateOutcome

  const positiveBalance = total >= 0

  let balance = 'negativo'

  if (positiveBalance) {
    balance = 'positivo'
  }
  console.log(`Seu saldo é ${balance}: ${total}`)
}

calculateBalance()
