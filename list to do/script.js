const mensagem = document.getElementById('pesquisar')
const lista = document.getElementById("listalegal")
const resultado = document.getElementById('res')

function botaoadd(){
    const text  = mensagem.value.trim();
    if(text !== ""){
        var lis = document.createElement("li");
        lis.innerHTML =  ` <p> ${text} </p>
         
        <div class = botões>
            <button class= "check" onclick= "Checartext(this)"> Check </button>
            <button class= "edit" onclick= "Edittext(this)"> Editar </button>
            <button class= "remove" onclick= "Removetext(this)"> Remover </button> </div>` ;
        
        
        lis.setAttribute('data-task', mensagem.value);
        lista.appendChild(lis)
        mensagem.value ="";

        lis.style.fontSize = '19px'
        
        

    }
    
}

function Checartext(button) {
    var li = button.parentNode.parentNode;
    li.style.color = '#00ff00'
    li.style.border = ' 3px solid green' 

}

function Edittext(button){
    const li = button.parentNode.parentNode;
    const p = li.querySelector('p')
    const novotexto = window.prompt("Editar o Texto:"  , p.textContent); 
    if (novotexto !== null) {
        p.textContent = novotexto;
}

}

function Removetext(button){
    var li = button.parentNode.parentNode;
    lista.removeChild(li);
}






