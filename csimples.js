function somar() {
    var n1 = document.querySelector('#v1')
    var n2 = document.querySelector('#v2')
    var resultado = document.querySelector('span')
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value);
}
function subtrair() {
    var n1 = document.querySelector('#v1')
    var n2 = document.querySelector('#v2')
    var resultado = document.querySelector('span')
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value);
}
function multiplicar() {
    var n1 = document.querySelector('#v1')
    var n2 = document.querySelector('#v2')
    var resultado = document.querySelector('span')
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value);
}
function dividir() {
    var n1 = document.querySelector('#v1')
    var n2 = document.querySelector('#v2')
    var resultado = document.querySelector('span')
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value);
}