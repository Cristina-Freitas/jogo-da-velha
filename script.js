const celulas = document.querySelectorAll('.celula');

let vezDoX = true;
let jogoAtivo = true;
let tabuleiro = ["","","","","","","","",""];

const combinacoesVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

document.getElementById("botaoReiniciar").addEventListener('click', iniciarJogo);

function iniciarJogo(){

    vezDoX = true;
    jogoAtivo = true;
    tabuleiro = ["","","","","","","","",""];

    celulas.forEach((celula,index) => {
        celula.textContent = "";
        celula.style.backgroundColor = "#e9dddd";
        celula.addEventListener('click', tratarClique, {once:true});
    });
}

function tratarClique(evento){

    if(!jogoAtivo) return;

    const celula = evento.target;
    const index = Array.from(celulas).indexOf(celula);

    const jogador = vezDoX ? "X" : "O";

    celula.textContent = jogador;
    tabuleiro[index] = jogador;

    verificarVitoria(jogador);

    vezDoX = !vezDoX;
}

function verificarVitoria(jogador){

    for(const combinacao of combinacoesVitoria){

        const [a,b,c] = combinacao;

        if(
            tabuleiro[a] === jogador &&
            tabuleiro[b] === jogador &&
            tabuleiro[c] === jogador
        ){

            jogoAtivo = false;

            celulas[a].style.backgroundColor = "#7CFC00";
            celulas[b].style.backgroundColor = "#7CFC00";
            celulas[c].style.backgroundColor = "#7CFC00";

            return;
        }
    }
}

iniciarJogo();