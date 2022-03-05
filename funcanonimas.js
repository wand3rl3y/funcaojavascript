const soma = function (x, y) {
  return x + y;
};

const imprime = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};
imprime(3, 4);
