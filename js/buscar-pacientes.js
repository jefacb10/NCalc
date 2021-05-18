var botaoBuscar = document.getElementById("buscar-paciente");

botaoBuscar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener("load", function(){
        var erro = document.getElementById("erro-ajax");
        if(xhr.status == "200"){ 
            erro.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function(paciente){
                console.log(paciente.nome);
                adicionaPacienteNaTabela(paciente);
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.innerHTML = "Error: " + xhr.status + " - " + xhr.responseText;
            erro.classList.remove("invisivel");
        }
    });
    xhr.send();
});
