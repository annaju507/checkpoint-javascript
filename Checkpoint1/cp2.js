
function multiplicacao() {
    let produto = Number(document.getElementById("produto").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    let resultado = produto * quantidade ;
    document.getElementById("resultado").innerText = "Total da compra: " + resultado;

}
multiplicacao(); 
