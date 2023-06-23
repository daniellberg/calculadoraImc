const btnCalcula = document.getElementById('btnCalc');
const btnLimpa = document.getElementById('btnClear');

btnCalcula.addEventListener("click", clicaBtn);
btnLimpa.addEventListener("click", limpaBtn);

function clicaBtn(){

    const peso = document.getElementById("pesoF");
    const altura = document.getElementById("alturaF");
    
    const imc = (peso.value/Math.pow(altura.value,2)).toFixed(2);
    
    document.getElementById("imcResult").textContent = imc;

    $("#imcResult").text(imc);
    $("#resultado").addClass("resultadoDepois");
}

function limpaBtn(){
    $("#resultado").removeClass("resultadoDepois");
    $("#imcResult").text("-");
}
