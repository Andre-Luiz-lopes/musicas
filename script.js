let musicas = [
    {titulo: 'Superman', artista: 'Eminem', src:'musicas/Superman.mp3', img: 'imagens/eminem.jpg'},
    {titulo: 'moneyTress', artista: 'Kendrick Lamar', src:'musicas/Kendrick Lamar - Money Trees (Feat. Jay Rock).mp3', img: 'imagens/moneyTress.jpg'},
    {titulo: 'Dialogo', artista: 'Yunk Vino', src:'musicas/1. Yunk Vino - Dialogo [Official Audio].mp3', img: 'imagens/yunk vino.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.desc h2');
let nomeArtista = document.querySelector('.desc i');

renderizarMusica(indexMusica)


// Eventos
document.querySelector('.sta').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segmin(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.sta').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.sta').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segmin(Math.floor(musica.currentTime));
}

function segmin(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

fit 