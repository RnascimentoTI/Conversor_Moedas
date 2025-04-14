//Cotação de moedas do dia.
const USD = 5.85
const EUR = 6.64
const GBP = 7.72

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault()
  
  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
    convertCurrency(amount.value, EUR, "€")
      break
      case "GBP":
        convertCurrency(amount.value, GBP, "£")
      break  
  }
}


// Funcão para converter a moeda.
function convertCurrency(amount, price, symbol){
  try {
    // Exibindo a cotação da Moeda Selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o Total.
    let total = amount * price
    // Formata o valor total.
    total = formatCurrencyBRL(total)
    // Exibir o resultado total
    result.textContent = `${total}`

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")
  }catch (error) {
    // Remove a classe do footer ocultando ele.
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde")
  }
}
// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value){
  // Converte para número para utilizar o "toLocaleString" para formatar no padrão BRL (R$ 0,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",

  })

}


