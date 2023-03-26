function calcular() {
let nome = window.document.getElementById ('nome');
let nomev = String(nome.value)
let peso = window.document.getElementById ('peso');
let pesoV = parseFloat(peso.value);
let altura = window.document.getElementById ('altura');
let alturaV = parseFloat(altura.value);
var res = window.document.getElementById ('res');
let imc = pesoV / (alturaV * alturaV);

if (pesoV > 0 && alturaV > 0){
    res.innerHTML = `Olá ${nomev} , seu IMC é o seguinte: ${imc.toFixed(2)}`


}else {
    res.innerHTML = `Preencha os dados corretamente`
    window.alert('Parece que você não colocou todas as informações necessarias... Por favor tente novamente!')
    
}
}
