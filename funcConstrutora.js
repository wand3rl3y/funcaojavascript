function Carro ( velMaxima = 200 , delta = 5){
    // atributo provado

    let velocAtual = 0

    this.acelerar = function (){
        if (velocAtual + delta <= velMaxima){
            velocAtual += delta
        }else {
            velocAtual = velMaxima 
        }
    }

    //metodo publico 
    this.getVelocidadeAtual = function (){
        return velocAtual
    }
}

const uno = new Carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (400 , 50)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())