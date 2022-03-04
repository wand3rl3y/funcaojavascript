// valor padrao do es2015

function somar(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(somar(), somar(3), somar(1, 2, 3), somar(0, 0, 0));
