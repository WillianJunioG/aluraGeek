const form = document.querySelector("#form");


function card(nome,valor,imagem){

    const card = document.createElement("div");
    card.className("produtos__itens");
    card.innerHTML = 
                `div class="produtos__itens">
                    <li class="produtos__imagem"> <img src="${imagem}" width="176px" height="174px"></li>
                    <li class="produtos__nome"> ${nome}  </li>
                    <li class="produto__valor"> ${valor} </li>                
                </div>`

}

async function listaFotos(){
    const listaApi = await conectaApi.listaFotos()
    if(listaApi.length>0){
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.imagem,elemento.nome,elemento.valor, elemento.id)
        ))
    }else{
        const mensagem = document.createElement('h1');
        mensagem.textContent = 'Nenhum produto cadastrado';
        lista.appendChild(mensagem);
    }
    
}
listaFotos()

async function criarFoto(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[produtos__imagem]").value;
    const nome = document.querySelector("[produtos__nome]").value;
    const valor = document.querySelector("[produtos__valor]").value;

    card(nome,valor,imagem);
}

formulario.addEventListener("submit", evento => criarFoto(evento))