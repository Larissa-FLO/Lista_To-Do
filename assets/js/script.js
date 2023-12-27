function botaoFechar(li)
{
    let span = document.createElement("span")
    let txt = document.createTextNode("\u2573")

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = () => span.parentElement.style.display = "none"
}

document.querySelectorAll('li').forEach(botaoFechar);

document.querySelector('ul').addEventListener('click', (e) => {
    
    if(e.target.tagName === 'LI')
    e.target.classList.toggle('checked');

})

function addTarefa()
{
    let li = document.createElement('LI');
    let tarefa = document.form_main.task.value;
    let caixaTarefa = document.createTextNode(tarefa);

    li.appendChild(caixaTarefa) //Texto foi criado e entra como lista
    document.querySelector('ul').appendChild(li) //Essa lista desordenada
    document.form_main.task.value = "" //Após limpa o imput

    botaoFechar(li);
}

document.addEventListener("keydown", function(p) {

    if(p.key === "Enter") {
        addTarefa()
        p.preventDefault()
    }

    return

});
    
