import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import {IMC, notNumber} from "./utils.js"


const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  // só vai executar o programa caso os dois sejam falsos
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
// isNaN não é um número - 
