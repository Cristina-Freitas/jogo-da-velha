// Seleciona todas as células do tabuleiro
const celulas = document.querySelectorAll('.celula');

// Define que o jogador inicial é o X
let vezDoX = true;

// Controla se o jogo ainda está ativo
let jogoAtivo = true;

// Representa o estado atual do tabuleiro
// Cada posição corresponde a uma célula
let tabuleiro = ["","","","","","","","",""];

// Todas as combinações possíveis de vitória
const combinacoesVitoria = [
    [0,1,2], // linha 1
    [3,4,5], // linha 2
    [6,7,8], // linha 3
    [0,3,6], // coluna 1
    [1,4,7], // coluna 2
    [2,5,8], // coluna 3
    [0,4,8], // diagonal principal
    [2,4,6]  // diagonal secundária
];

// Adiciona evento ao botão de reiniciar jogo
document.getElementById("botaoReiniciar").addEventListener('click', iniciarJogo);


// Função responsável por iniciar ou reiniciar o jogo
function iniciarJogo(){

    // Sempre reinicia com o jogador X
    vezDoX = true;

    // Define que o jogo está ativo novamente
    jogoAtivo = true;

    // Limpa o estado do tabuleiro
    tabuleiro = ["","","","","","","","",""];

    // Percorre todas as células do tabuleiro
    celulas.forEach((celula,index) => {

        // Remove qualquer texto da célula
        celula.textContent = "";

        // Reseta a cor da célula
        celula.style.backgroundColor = "#e9dddd";

        // Adiciona evento de clique
        // once:true faz com que cada célula só possa ser clicada uma vez
        celula.addEventListener('click', tratarClique, {once:true});
    });
}


// Função executada quando uma célula é clicada
function tratarClique(evento){

    // Se o jogo já terminou, não faz nada
    if(!jogoAtivo) return;

    // Identifica qual célula foi clicada
    const celula = evento.target;

    // Descobre o índice da célula no tabuleiro
    const index = Array.from(celulas).indexOf(celula);

    // Define qual jogador está jogando
    const jogador = vezDoX ? "X" : "O";

    // Coloca o símbolo na célula
    celula.textContent = jogador;

    // Atualiza o estado do tabuleiro
    tabuleiro[index] = jogador;

    // Verifica se houve vitória
    verificarVitoria(jogador);

    // Alterna o jogador
    vezDoX = !vezDoX;
}


// Função responsável por verificar se algum jogador venceu
function verificarVitoria(jogador){

    // Percorre todas as combinações possíveis
    for(const combinacao of combinacoesVitoria){

        // Extrai as posições da combinação
        const [a,b,c] = combinacao;

        // Verifica se as três posições possuem o mesmo jogador
        if(
            tabuleiro[a] === jogador &&
            tabuleiro[b] === jogador &&
            tabuleiro[c] === jogador
        ){

            // Encerra o jogo
            jogoAtivo = false;

            // Destaca as células vencedoras
            celulas[a].style.backgroundColor = "#7CFC00";
            celulas[b].style.backgroundColor = "#7CFC00";
            celulas[c].style.backgroundColor = "#7CFC00";

            return;
        }
    }
}

// Inicia o jogo ao carregar a página
iniciarJogo();