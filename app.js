let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === "") {
        alert('Ingresa un nombre.');
        return;
    }else{
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
        document.getElementById('resultado').innerHTML = '';
    }
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega nombres antes de sortear.');
        return;
    }else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoElegido = amigos[indiceAleatorio];
      
      document.getElementById('listaAmigos').innerHTML = '';
      document.getElementById('resultado').innerHTML = `<li>El amigo secreto elegido es: ${amigoElegido}</li>`;

      amigos.length = 0;
    }
}