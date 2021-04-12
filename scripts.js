document.getElementById("moneyInput").addEventListener('input', function(e){
       
    let brlAmount = document.getElementById("moneyInput").value;

    let brlToDolar = (brlAmount / 5.51).toFixed(2); // Converte o Real em Dolar.
    let brlToEuro = (brlAmount / 6.58).toFixed(2); // Converte o Real em Euro.
    let brlToLibra = (brlAmount / 7.64).toFixed(2); // Converte o Real em Libra.
    let brlToIene = (brlAmount / 0.051).toFixed(2); // Converte o Real em Yene.

    let usd = e.target.value;
            document.getElementById("dolarOutput").innerHTML = brlToDolar;
            document.getElementById("euroOutput").innerHTML = brlToEuro;
            document.getElementById("libraOutput").innerHTML = brlToLibra;
            document.getElementById("ieneOutput").innerHTML = brlToIene;


}) // Função que recebe o valor em Real e transforma nas 4 moedas seguintes


/* Aqui o código original da aula 01.

let brlAmount = parseFloat(brlAmount);

let valorEmDolarTexto = prompt("Qual o valor em dolar você gostaria de converter?") //Recebe o valor em Dolar.

let valorEmDolarNumero = parseFloat(valorEmDolarTexto) // Faz o valor do Dolar aceitar casas decimais.

let valorEmReal = valorEmDolarNumero * 5.50 // Converte o Dolar em Real.

let valorEmRealFixado = valorEmReal.toFixed(2) //Fixa o valor com 2 casas decimais após a virgula.

alert(valorEmRealFixado) //Exibe o valor final do Dolar em Real.
*/
