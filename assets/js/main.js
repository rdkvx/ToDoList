let btnSubmit = document.querySelector("[data-form-submit]");

function addNotas(event){
    event.preventDefault();
    
    let inputNotas = document.querySelector("[data-form-input]")
    let conteudoInputNotas = inputNotas.value;
    let lista = document.querySelector("[data-list]");
    let listaItem = document.createElement("li");
    listaItem.classList.add("task");
    let itemConteudo = `<p class="content">${conteudoInputNotas}</p>`
    listaItem.innerHTML = itemConteudo;
    inputNotas.value = "";
    listaItem.appendChild(btnConcluiTarefa());
    listaItem.appendChild(btnRemoveTarefa());

    lista.appendChild(listaItem);
    

    
}

function btnConcluiTarefa(){
    let btnConclui = document.createElement("button");
    btnConclui.innerHTML = "Concluir"
    btnConclui.classList.add("check-button");

    btnConclui.addEventListener("click", function(event){
        let concluir = event.target.parentElement;
        concluir.classList.toggle("done");
    });

    return btnConclui;
}

function btnRemoveTarefa(){
    let removeTarefa = document.createElement("button");
    removeTarefa.innerHTML = "Remover";
    removeTarefa.addEventListener("click", function(event){
        let btnRemove = event.target.parentElement.remove();
    });

    return removeTarefa;
}

btnSubmit.addEventListener("click", addNotas);