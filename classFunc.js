//Classe 
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome e ${this.nome}`);
  }
}

const p1 = new Pessoa("João");
p1.falar();


//Func COstrutora 

function Pessoa2 (nome2){
    this.nome2 = nome2

    this.falar2 = function(){
        console.log(`Meu nome e ${this.nome2}`)
    }
}
const p2 = new Pessoa2('Maria')
p2.falar2()