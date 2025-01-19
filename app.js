let nameList = [];
let lista = document.getElementById("listaAmigos");

function agregarAmigo() {
    let name = document.getElementById("amigo").value;
    if (name == "") {
        alert("Por favor, inserte un nombre");
        } else {
        nameList.push(name);
        agregarLista(nameList);
        document.getElementById("amigo").value = ""
    }
}

function agregarLista(nombres) {
    lista.innerHTML = ""; 
    for(let i = 0; i < nombres.length; i++) {
        lista.innerHTML += `<li>${nombres[i]}</li>`;
    }
}

function sortearAmigo() {
    if (nameList.length > 0) {
        let random = Math.floor(Math.random()*nameList.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto es: ${nameList[random]}`;
        nameList = [];
        lista.innerHTML = "";
    }
}