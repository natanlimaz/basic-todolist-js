let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefas() {
    listElement.innerHTML = "";

    tarefas.map((todo) => {
        let liElement = document.createElement('li');
        let tarefaText = document.createTextNode(todo);

        let aElement = document.createElement('a');
        aElement.setAttribute("href", "#");
        let aText = document.createTextNode("Excluir")
        aElement.appendChild(aText);

        let posicao = tarefas.indexOf(todo);
        aElement.setAttribute("onclick", `deletarTarefa(${posicao})`);


        
        liElement.appendChild(tarefaText);
        liElement.appendChild(aElement);
        listElement.appendChild(liElement);
    })
    
}

renderTarefas();

function adicionarTarefa() {
    if(inputElement.value === '') {
        alert('Digite alguma tarefa');
        return false;
    }
    else {
        var tarefa = inputElement.value;
        tarefas.push(tarefa);

        inputElement.value = '';
        renderTarefas();
        salvarDados();
    }
}

buttonElement.onclick = adicionarTarefa;

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}