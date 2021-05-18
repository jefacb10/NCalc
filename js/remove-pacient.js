var pacientes = document.querySelector("#tabela-pacientes");
pacientes.addEventListener("dblclick", function(event){
    if(event.target.tagName == 'TD'){
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    }
});
