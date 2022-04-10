let imagens = [ "bobrossparrot", "bobrossparrot" , "explodyparrot", "explodyparrot","fiestaparrot", "fiestaparrot", "metalparrot", "metalparrot", "revertitparrot","revertitparrot", "tripletsparrot", "tripletsparrot", "unicornparrot","unicornparrot"]
let primeiroClick;
let segundoClick;
let jogadas = 0;
let acertos = 0;
let elemento2;
let check;
let qtd;


iniciarJogo();


function iniciarJogo() {
    let qtd = prompt("Com quantas cartas você quer jogar? (4 a 14)");
    if  (qtd % 2 !== 0 || qtd < 4 || qtd > 14) {
        alert("Necessário selecionar um número par entre 4 e 14")
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

    cartasEmbaralhadas.sort(embaralhar)
    for (let contador2 = 0; contador2 < cartasEmbaralhadas.length; contador2++) {
      lista.innerHTML += ` <div class="card" onclick = "selecionarCarta(this)">
                                <div class="front-face face">
                                    <img src="/images/front.png">
                                </div>
                                <div class="back-face face">
                                    <img class ="verso"src="/images/${cartasEmbaralhadas[contador2]}.gif">
                                </div>
                            </div>
                            `
    }
}    

function embaralhar() {
    return Math.random() - 0.5;
}

function virarCarta(elemento) {
    elemento.children[0].classList.add("virado");
    elemento.children[1].classList.add("virado");
}


function selecionarCarta(elemento) {
    virarCarta(elemento);
    if (primeiroClick === undefined) { 
        jogadas++;
        primeiroClick = elemento.children[1].querySelector(".verso").src;
        elemento2 = elemento.querySelectorAll(".face");
    } else {
        segundoClick = elemento.children[1].querySelector(".verso").src;
        if (primeiroClick == segundoClick) {
            jogadas++;
            acertos++;
            primeiroClick = undefined; // reiniciando os clicks
            segundoClick = undefined; // reiniciando os clicks
        } else if (primeiroClick != segundoClick) { // cartas selecionadas diferentes, desvirando as duas
                setTimeout(function () {
                    jogadas++;
                    elemento2[0].classList.remove("virado");
                    elemento2[1].classList.remove("virado");
                    elemento.children[0].classList.remove("virado");
                    elemento.children[1].classList.remove("virado");
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
        alert(`Você ganhou em ${jogadas} jogadas!`);
        win = true;
        acertos = 0;
        jogadas = 0;
    }
}