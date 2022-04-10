let imagens = [ "bobrossparrot", "bobrossparrot" , "explodyparrot", "explodyparrot","fiestaparrot", "fiestaparrot", "metalparrot", "metalparrot", "revertitparrot","revertitparrot", "tripletsparrot", "tripletsparrot", "unicornparrot","unicornparrot"]

iniciarJogo();


function iniciarJogo() {
    removerCartas();
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
      lista.innerHTML += ` <div class="card" onclick = "virarCarta(this)">
                                <div class="front-face face">
                                    <img src="/images/front.png">
                                </div>
                                <div class="back-face face">
                                    <img class ="jogo"src="/images/${cartasEmbaralhadas[contador2]}.gif">
                                </div>
                            </div>
                            `
    }
}    

function removerCartas() {
    let lista = document.querySelector("li");
    lista.innerHTML = "";
}

function embaralhar() {
    return Math.random() - 0.5;
}

function virarCarta(elemento) {
    elemento.children[0].classList.add("virado");
    elemento.children[1].classList.add("virado");
}


