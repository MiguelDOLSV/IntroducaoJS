var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando Paciente...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET",);

    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    })

    xhr.send();
    
})