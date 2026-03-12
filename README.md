# Jogo da Velha

Projeto simples de **Jogo da Velha desenvolvido com HTML, CSS e JavaScript**, com lógica de turnos entre jogadores, verificação automática de vitória e destaque visual das células vencedoras.

Este projeto foi desenvolvido como exercício de prática em **manipulação do DOM, eventos e lógica de programação em JavaScript**.

---

## Demonstração

O jogo permite que dois jogadores alternem jogadas entre **X** e **O**, identificando automaticamente quando uma sequência vencedora é formada.

Funcionalidades atuais:

- Alternância automática entre jogador **X** e **O**
- Bloqueio de células já utilizadas
- Detecção automática de vitória
- Destaque visual das células vencedoras
- Botão para reiniciar a partida

---

## Tecnologias utilizadas

- **HTML5** – estrutura da página  
- **CSS3** – layout e estilização do tabuleiro  
- **JavaScript** – lógica do jogo e manipulação do DOM  

---

## Estrutura do projeto

jogo-da-velha/

│

├── index.html

├── style.css

├── script.js

└── README.md

---

## Como executar o projeto

1. Clone o repositório:
2. Acesse a pasta do projeto: cd jogo-da-velha
3. Abra o arquivo **index.html** no navegador.

---

## Lógica principal do jogo

O jogo utiliza:

- Um **array de 9 posições** para representar o estado do tabuleiro
- **Event listeners** para capturar cliques nas células
- **Combinações de vitória pré-definidas** para verificar quando um jogador vence
- **Manipulação de estilos CSS via JavaScript** para destacar as células vencedoras

---

## Possíveis melhorias

O projeto pode ser expandido com diversas funcionalidades adicionais:

### 1. Sistema de Rodadas
Permitir múltiplas partidas sem reiniciar o jogo completamente.

Exemplo:

Rodada 1
X venceu

Rodada 2
O venceu

---

### 2. Placar de Jogadores

Adicionar um contador de vitórias.

Exemplo:

Placar

X : 2 vitórias
O : 1 vitória
Empates : 1

---

### 3. Detecção de Empate

Identificar automaticamente quando o tabuleiro estiver cheio sem vencedor.

Exemplo de mensagem: Empate!

---

### 4. Jogador contra Computador

Adicionar modo **Player vs CPU**, com:

- jogadas aleatórias
- ou algoritmo **Minimax** para IA perfeita.

---

### 5. Melhorias visuais

Possíveis melhorias de interface:

- animação ao marcar a célula
- efeito visual de vitória
- layout responsivo para celular
- destaque do jogador da vez

---

### 6. Interface mais completa

Adicionar elementos visuais como:

- indicador **"Vez do jogador X"**
- botão **"Nova rodada"**
- histórico de partidas

---

## Objetivo educacional

Este projeto foi criado com foco em treinar:

- lógica condicional
- manipulação do DOM
- eventos em JavaScript
- organização de código
- desenvolvimento de pequenas aplicações web interativas

---

## Autor

Cristina Freitas
