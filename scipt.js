
const numero1 = document.getElementById("numero1")

 
const numero2 = document.getElementById("numero2")

 
const resultado = document.getElementById("resultado")

 
const calcular = document.getElementById("somar")

 
const formulario = document.getElementById("formulario")

 
 

 
function soma () {

 
resultado.value = parseInt(numero1.value) + parseInt(numero2.value)

 
formulario.classList.add("green")

 
}

 
 

 
somar.addEventListener("click", soma)

 
 

 
 

 
function subtrai () {

 
resultado.value = parseInt(numero1.value) - parseInt(numero2.value)

 
formulario.classList.add("pink")

 
}

 
 

 
subtrair.addEventListener("click", subtrai)

 
 

 
function multiplica () {

 
resultado.value = parseInt(numero1.value) * parseInt(numero2.value)

 
formulario.classList.add("blue")

 
}

 
 

 
multiplicar.addEventListener("click", multiplica)

 
 

 
function divide () {

 
resultado.value = parseInt(numero1.value) - parseInt(numero2.value)

 
formulario.classList.add("purple")

 
}

 
 

 
dividir.addEventListener("click", divide)