document.getElementById("valorMaterial").addEventListener("input", function () {

    let input = document.getElementById("valorMaterial");    
    let valor = input.value.replace(/\D/g, "");
    let numero = parseFloat(valor) / 100;

    input.value = numero.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
});

document.getElementById("porcentagemMdo").addEventListener("input", function () {
    let input = document.getElementById("porcentagemMdo");
    let valor = input.value.replace(/\D/g, "");
    let numero = valor + "%";

    input.value = numero;
});

document.getElementById("porcentagemLucro").addEventListener("input", function () {
    let input = document.getElementById("porcentagemLucro");
    let valor = input.value.replace(/\D/g, "");
    let numero = valor + "%";

    input.value = numero;
});

document.getElementById("btnCalcular").addEventListener("click", function () {
    let valorMaterial = (document.getElementById("valorMaterial").value.replace(/\D/g, ""));
    valorMaterial = parseFloat(valorMaterial) / 100;

    let porcentagemMdo = (document.getElementById("porcentagemMdo").value.replace(/\D/g, ""));
    porcentagemMdo = parseFloat(porcentagemMdo) / 100 * valorMaterial;
    
    let porcentagemLucro = (document.getElementById("porcentagemLucro").value.replace(/\D/g, ""));
    porcentagemLucro = parseFloat(porcentagemLucro) / 100 * valorMaterial;

    let resultado = valorMaterial + porcentagemMdo + porcentagemLucro;

    document.getElementById("resultado").textContent = "O valor do produto será: " + 
    resultado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
);

document.getElementById("btnReset").addEventListener("click", function() {
    let valorMaterial = (document.getElementById("valorMaterial").value.replace(/\D/g, ""));
    valorMaterial = parseFloat(valorMaterial) / 100;

    let porcentagemMdo = (document.getElementById("porcentagemMdo").value.replace(/\D/g, ""));
    porcentagemMdo = parseFloat(porcentagemMdo) / 100 * valorMaterial;
    
    let porcentagemLucro = (document.getElementById("porcentagemLucro").value.replace(/\D/g, ""));
    porcentagemLucro = parseFloat(porcentagemLucro) / 100 * valorMaterial;

    let resultado = valorMaterial + porcentagemMdo + porcentagemLucro;

    if (resultado > 0, document.getElementById("resultado").textContent = ("O valor do produto será: R$ NaN") ) {
        document.getElementById("valorMaterial").value = "";
        document.getElementById("porcentagemMdo").value = "";
        document.getElementById("porcentagemLucro").value = "";
        document.getElementById("resultado").textContent = "";
    }
});