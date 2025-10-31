// 1 - Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor.
function livro(nome, ano, autor) {
    // 2.1 - Nome em maiúsculas
    const nomeMaiusculo = nome.toUpperCase();
  
    // 2.2 - Cálculo dos anos desde o lançamento
    const anosDesdeLancamento = 2050 - ano;
  
    // 2.3 - Frase com nome e autor
    const frase = nome + ' por ' + autor;

    // 2.4 - Criação do objeto com os 3 valores
    const objetoLivro = {
      nomeMaiusculo: nomeMaiusculo,
      anosDesdeLancamento: anosDesdeLancamento,
      frase: frase
    };
  
    // 3 - Retorno do objeto
    return objetoLivro;
  }
  
  // 4 - Execução da função com os argumentos fornecidos
  const resultado = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
  
  // 6 - Log da frase final no console
  console.log(resultado.frase);