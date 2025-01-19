let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }
    amigos.push(nomeAmigo);
    atualizarLista();
    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
    setTimeout(() => {
        alert(`O amigo secreto é: ${amigoSorteado}`);
        alert('Obrigado por jogar o jogo do Amigo Secreto!');
        reiniciarJogo();
    }, 100);
}

function reiniciarJogo() {
    amigos = [];
    atualizarLista();
    document.getElementById('resultado').innerHTML = '';
    location.reload();
}
