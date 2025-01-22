let imagens = [ "bobrossparrot", "bobrossparrot" , "explodyparrot", "explodyparrot","fiestaparrot", "fiestaparrot", "metalparrot", "metalparrot", "revertitparrot","revertitparrot", "tripletsparrot", "tripletsparrot", "unicornparrot","unicornparrot"];
let primeiroClick;
let segundoClick;
let jogadas = 0;
let acertos = 0;
let carta2;
let qtd;
let segundos;


function iniciarTimer (){
    segundos =0;
    segundos = setInterval(incrementaContador,1000);
}

function incrementaContador(){
    segundos ++;
    document.querySelector('.segundo').innerHTML = new Intl.NumberFormat("pt-BR", { minimumIntegerDigits: 2}).format(segundos);
} 

function iniciarJogo() {
    let qtd = prompt("Com quantas cartas você quer jogar? (4 a 14)");
    if  (qtd % 2 !== 0 || qtd < 4 || qtd > 14) {
        alert("Necessário selecionar um número par entre 4 e 14");
        qtd = 0;
        iniciarJogo();
    } else {
        inserirCartas (qtd);
    }
}

function inserirCartas(qtd) {
    let lista = document.querySelector("li");
    lista.innerHTML = "";
    let cartasEmbaralhadas = [];
    
    for( let contador1 = 0; contador1< qtd; contador1++){
        cartasEmbaralhadas.push(imagens[contador1]);
    }
    cartasEmbaralhadas.sort(embaralhar);
    for (let contador2 = 0; contador2 < cartasEmbaralhadas.length; contador2++) {
      lista.innerHTML += ` <div class="card" onclick = "selecionarCarta(this)">
                                <div class="front-face face">
                                    <img src="/images/front.png">
                                </div>
                                <div class="back-face face">
                                    <img class ="verso"src="images/${cartasEmbaralhadas[contador2]}.gif">
                                </div>
                            </div>
                            `;
    }
}    

function embaralhar() {
    return Math.random() - 0.5;
}

function virarCarta(carta) {
    carta.children[0].classList.add("virado");
    carta.children[1].classList.add("virado");
}

function selecionarCarta(carta) {
    virarCarta(carta);
    if (primeiroClick === undefined) { 
        jogadas++;
        primeiroClick = carta.children[1].querySelector(".verso").src;
        carta2 = carta.querySelectorAll(".face");
    } else {
        segundoClick = carta.children[1].querySelector(".verso").src;
        if (primeiroClick == segundoClick) {
            jogadas++;
            acertos++;
            primeiroClick = undefined; // reiniciando os clicks
            segundoClick = undefined; // reiniciando os clicks
        } else if (primeiroClick != segundoClick) { // cartas selecionadas diferentes, desvirando as duas
                setTimeout(function () {
                    jogadas++;
                    carta2[0].classList.remove("virado");
                    carta2[1].classList.remove("virado");
                    carta.children[0].classList.remove("virado");
                    carta.children[1].classList.remove("virado");
                    primeiroClick = undefined;
                    segundoClick = undefined;
                }, 1000)
        }
    }
    setTimeout(gameOver, 1000);
}

function gameOver() {
    let lista = document.querySelectorAll("li div");

    if (acertos == lista.length/6) { // Checar se o jogo acabou. 3 divs por carta, 2 cartas por imagem = 6. Se acertos(cartas iguais viradas) for igual ao número divs /6
        alert(`Você ganhou em ${jogadas} jogadas e em ${segundos} segundos!`);
        win = true;
        acertos = 0;
        jogadas = 0;
        reiniciarJogo();
    }
}

function reiniciarJogo(){
    let reiniciar = prompt("Gostaria de reiniciar a partida? (sim/não)");
    if (reiniciar === "sim"){
        iniciarJogo();
        iniciarTimer();
    } else if (reiniciar === "não"){
        alert("Até a próxima!")
    }else{
        alert("Texto precisa ser sim ou não, com a devida pontuação");
        reiniciarJogo()
    }
}

iniciarJogo();
iniciarTimer();
