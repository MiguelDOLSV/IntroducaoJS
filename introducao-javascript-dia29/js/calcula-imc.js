var titulo = document.querySelector(".titulo");		
		titulo.textContent = "Nutrição Bonifácio";

	var pacientes = document.querySelectorAll(".paciente");
	for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");	

	var pesoEhValido = validaPeso(peso);//True ou false
	var alturaEhValida = validaAltura(altura);

	if (!pesoEhValido) {
		console.log("Peso inválido");
		pesoEhValido = false;	
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEhValida) {
		console.log("Altura Inválida");
		tdImc.textContent = "Altura Inválida";
		alturaEhValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if (alturaEhValida && pesoEhValido) {
	    var imc = calculaImc(peso, altura) ;
	    tdImc.textContent = imc;    
		} else {
	    tdImc.textContent = "Altura e/ou peso inválidos!"
	}
}

function validaPeso(peso) {
	if (peso >= 0 && peso < 1000) {
		return true;
	}else{
		return false
	}
}

function validaAltura(altura){
	if (altura >= 0 && altura <= 3.0) {
		return true;
	}else{
		return false;
	}
}


function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}



	





		

	
	
	



