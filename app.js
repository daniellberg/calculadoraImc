const btnCalcula = document.getElementById('btnCalc');
const btnLimpa = document.getElementById('btnClear');

btnCalcula.addEventListener("click", clicaBtn);
btnLimpa.addEventListener("click", limpaBtn);

const categoriasImc = ["abaixo do peso", "com o peso normal", "com pré-obesidade", "com obesidade Grau 1", "com obesidade Grau 2", "com obsesidade Grau 3"]

function clicaBtn(){

    const peso = document.getElementById("pesoF");
    const altura = document.getElementById("alturaF");
    
    const imc = (peso.value/Math.pow(altura.value,2)).toFixed(1);
    
    document.getElementById("imcResult").textContent = imc;

    $("#imcResult").text(imc);
    $("#resultado").addClass("resultadoDepois");

    if(imc<18.5){
        $("#categoriaImc").text(categoriasImc[0]);
    } else if(imc>=18.5 && imc<=24.9){
        $("#categoriaImc").text(categoriasImc[1]);
    } else if(imc>24.9 && imc<=29.9){
        $("#categoriaImc").text(categoriasImc[2]);
    } else if(imc>29.9 && imc<=34.9){
        $("#categoriaImc").text(categoriasImc[3]);
    } else if(imc>34.9 && imc<=39.9){
        $("#categoriaImc").text(categoriasImc[4]);
    } else{
        $("#categoriaImc").text(categoriasImc[5]);
    }
}

function limpaBtn(){
    $("#resultado").removeClass("resultadoDepois");
    $("#imcResult").text("");
}
