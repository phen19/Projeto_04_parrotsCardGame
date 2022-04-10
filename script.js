let imagens = [ "bobrossparrot" , "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"]

iniciarJogo()


function iniciarJogo(){
    let qtd = Number(prompt("Deseja jogar com quantas cartas? (4 a 14)"));
    if (qtd % 2 !== 0 || qtd < 4|| qtd > 14){
        alert("É necessário inserir um número par entre 4 e 14");
        qtd = 0;
        iniciarJogo(); 
    }else{
        inserirCartas(qtd);
    }
}

function inserirCartas(qtd) {
    let lista = document.querySelector("li");
    lista.innerHTML = "";
    let cartasEmbaralhadas = [];
    
    for( let contador1 = 0; contador1< qtd/2; contador1++){
        cartasEmbaralhadas.push(imagens[contador1]);
    }

    cartasEmbaralhadas.sort(embaralhar)
    for (let contador2 = 0; contador2 < cartasEmbaralhadas.length; contador2++) {
      lista.innerHTML += ` <div class="card">
                                <div class="front-face face">
                                    <img src="/images/front.png">
                                </div>
                                <div class="back-face face">
                                    <img src="/images/${imagens[contador2]}.gif">
                                </div>
                            </div>
                            <div class="card">
                                <div class="front-face face">
                                    <img src="/images/front.png">
                                </div>
                                <div class="back-face face">
                                    <img src="/images/${imagens[contador2]}.gif">
                                </div>
                            </div>
                            `
    }
}    

function embaralhar(){
    return Math.random() - 0.5;
}


//inserirCartas();
/*TO DO PROJETO:

- codar JS perguntar quantidade de cartas e inclusão das divs, usando LI e UL. Loop de repetição com a quantidade/ 2 (vai criar duas cartas com a mesma imagem do gif)

- verificar questão do sort

- criar array com os nomes das imagens dos gifs.

- classe com o transform

*/