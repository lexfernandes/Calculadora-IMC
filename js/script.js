import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import {calculateIMC, notNumber} from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  // só vai executar o programa caso os dois sejam falsos
  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)

  Modal.open()
  const message = `Seu IMC é ${result}`
  Modal.message.innerText = message
}

