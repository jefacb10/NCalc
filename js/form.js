var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemInformacoesDoFormulario(form);
    var erro = validaPaciente(paciente);
    if(erro.length > 0){
        exibeMsgErro(erro);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);
    
    form.reset();
    var msgErro = document.querySelector("#mensagem-erro");
    msgErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montarPacienteTr(paciente);

    var tbPacientes = document.querySelector("#tabela-pacientes");
    tbPacientes.appendChild(pacienteTr);
}

function obtemInformacoesDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function exibeMsgErro(erro){
    var msgErroUl = document.querySelector("#mensagem-erro");
    msgErroUl.innerHTML = "";
    erro.forEach(function(erro){
        var erroLi = document.createElement("li");
        erroLi.textContent = erro;
        msgErroUl.appendChild(erroLi);
    });
}

function montarPacienteTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erro = [];
    if(paciente.nome.length <=0){
        erro.push("Nome não pode estar vazio!");
    }
    if(!validaPeso(paciente.peso))
        erro.push("Peso inválido!")
    
    if(!validaAltura(paciente.altura))
        erro.push("Altura inválida!");
    
    if(paciente.gordura.length <=0){
        erro.push("Gordura não pode estar vazio!");
    }
    if(paciente.peso.length <=0){
        erro.push("Peso não pode estar vazio!");
    }
    if(paciente.altura.length <=0){
        erro.push("Altura não pode estar vazia!");
    }
    return erro;
}