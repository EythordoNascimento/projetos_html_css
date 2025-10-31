/* Crie uma função chamada calcularDesconto que receba dois parâmetros: o
preço original de um produto e a porcentagem de desconto.
A função deve retornar uma string informando o valor final com o desconto
aplicado.

Use const para armazenar o valor final e let para o preço original e o
desconto. */

function calcularDesconto(precoOriginal, porcentagemDesconto) {
    // Usando let para armazenar os valores recebidos
    let preco = precoOriginal;
    let desconto = porcentagemDesconto;
  
    // Calculando o valor final com desconto
    const valorFinal = preco - (preco * (desconto / 100));
  
    // Retornando a string com o resultado
    return `O valor final com ${desconto}% de desconto é R$ ${valorFinal.toFixed(2)}`;
  }
  
  // Exemplo de execução
  console.log(calcularDesconto(500, 20));