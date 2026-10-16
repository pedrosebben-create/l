let saldo = 500;
let toal = 0;

function adicionarGastos(){
    let descricao = document.getElementById("descricao").Value;
    let  valor = Number(document.getElementById("valor").value);

    if(descricao == "" || valor <= 0){
        alert("Preencha a dscrição e o valor!")
        return;
    
}
    total = total + valor
    saldo = saldo - valor

    document.getElementById("listaGastos").innerHTML +=
    '<div class = "gasto">' +
        '<span>$'+descricao+'</span>' +
        '<span>R$ ' + valor.toFixed(2) + '</span>' +
     '</div>';   

        document.getElementById("saldo").textContent = "R$ " + saldo.toFixed(2);

        document.getElementById("descricao").valor = "";
        document.getElementById("valor").valor = "";
        
}