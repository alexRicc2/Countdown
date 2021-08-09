
const data  = '1 jan 2022'
const dataO = new Date(data);

const nDays = document.querySelector('#days')
const nHours = document.querySelector('#hours')
const nMinutes = document.querySelector('#minutes')
const nSeconds = document.querySelector('#seconds')

function timer(){
  const hoje = new Date();
  const diferenca = Math.floor((dataO - hoje) / 1000)
  const dias = Math.floor(diferenca / (60*60*24))
  const horas = Math.floor(diferenca / (60*60) % 24)
  const minutos = Math.floor(diferenca / (60) % 60 )
  const segundos = Math.floor(diferenca % 60)
  console.log(dias, horas, minutos, segundos)

  nDays.innerText = dias
  nHours.innerText = horas
  nMinutes.innerText = minutos
  nSeconds.innerText = segundos
  
}
timer()
setInterval("timer()", 1000)