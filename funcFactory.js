function criarProduto(nome , preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}
console.log(criarProduto("Notebook", 1000));
console.log(criarProduto("ipade", 500));
