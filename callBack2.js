const notas = [7, 8, 6, 4, 9, 3.5];

// sem call back

let notasBaixa = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixa.push(notas[i]);
  }
}

console.log(notasBaixa);

// com Callback

const notasBaixa2 = notas.filter(nota => nota < 7)
console.log(notasBaixa2)

