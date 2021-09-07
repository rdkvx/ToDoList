const input = document.querySelector("[data-form-input]");
const submit = document.querySelector("[data-form-button]");
const date = document.querySelector("[data-form-date]");

const dateArray = [];


submit.addEventListener("click", (event)=>{
    event.preventDefault();
    
    criaTarefa();
    
});

const criaTarefa = ()=>{
    
    let dataFormatada = moment(date.value);
    let hora = dataFormatada.format('HH:MM');
    dataFormatada = dataFormatada.format('DD/MM/YYYY');

    let dataTarefa = document.createElement("li");
    dataTarefa.classList.add("date-task");
    let dataHeader = `<p class="content-data">${dataFormatada}</p>`
    dataTarefa.innerHTML = dataHeader;
   
    

    const lista = document.querySelector("[data-list]");
    
    
    if(!dateArray.includes(dataFormatada)){
        const tarefa = document.createElement("li");
        tarefa.classList.add("task");
        
        const conteudo = `<p class="content">${hora} * ${input.value}</p>`;
        tarefa.innerHTML = conteudo;

        const concluir = document.createElement("button");
        concluir.classList.toggle("check-button");
        concluir.innerHTML = 'concluir';
        tarefa.appendChild(concluir);

        const deletar = document.createElement("button");
        deletar.innerHTML = "deletar";
        tarefa.appendChild(deletar);

        
        dataTarefa.appendChild(tarefa);
        lista.appendChild(dataTarefa);
        

        btnConcluir(concluir, tarefa.firstChild);
        btnDeletar(tarefa, deletar, dataTarefa, dataFormatada);
        
        input.value = "";
        dateArray.push(dataFormatada);
    }
    else{
        const tarefa = document.createElement("li");
        tarefa.classList.add("task");
        
        const conteudo = `<p class="content">${hora} * ${input.value}</p>`;
        tarefa.innerHTML = conteudo;

        const concluir = document.createElement("button");
        concluir.classList.toggle("check-button");
        concluir.innerHTML = 'concluir';
        tarefa.appendChild(concluir);

        const deletar = document.createElement("button");
        deletar.innerHTML = "deletar";
        tarefa.appendChild(deletar);

        const dataExistente = document.querySelectorAll(".date-task");
        dataExistente.forEach(function(dtExistente){
            if(dateArray.indexOf(dataFormatada) != -1){
                dtExistente.appendChild(tarefa);
                
            }   
        });
        

        btnConcluir(concluir, tarefa.firstChild);
        btnDeletar(tarefa, deletar, dataTarefa, dataFormatada);

        input.value = "";
    }
};

let btnConcluir = (concluir, conteudo) =>{
    concluir.addEventListener("click",()=>{
        conteudo.classList.toggle("concluido");
    });
};

let btnDeletar = (tarefa, deletar, dataTarefa, dataFormatada) =>{
    deletar.addEventListener("click",()=>{
        const dataExistente = document.querySelectorAll(".task");
        const dataARemover = document.querySelector(".date-task");
       
        if(dataExistente.length < 2){
            dataTarefa.remove();
            dataARemover.remove();
            tarefa.remove();
            
            dateArray.splice(dateArray.indexOf(dataFormatada));
        }
        else{
            tarefa.remove();
        };  
    });
};