var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i< pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var isPesoValid = validaPeso(peso);
    var isAlturaValid = validaAltura(altura);
    if(!isPesoValid){
        console.log("Peso inválido");
        isPesoValid = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!isAlturaValid){
        console.log("Altura inválida");
        isAlturaValid = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(isPesoValid && isAlturaValid){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc
    } 
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    return peso >= 0 && peso <= 300;
}

function validaAltura(altura){
    return altura >= 0 && altura <= 2.40;
}
