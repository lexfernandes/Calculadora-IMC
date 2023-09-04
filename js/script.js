import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
// variaveis - variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if (showAlertError) {
    AlertError.open()
    return
  }
  AlertError.close()

  const result = IMC(weight, height)

  Modal.open()
  const message = `Seu IMC é ${result}`
  Modal.message.innerText = message
}
function notNumber(value) {
  return isNaN(value) || value == ""
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}