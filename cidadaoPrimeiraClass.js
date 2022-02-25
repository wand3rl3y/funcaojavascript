// função de forma literal

function fun1 (){  
}

// armazena em uma variavel 

const fun2 = function (){}

// armazenar em um atributo do objeto

const obj = {}

obj.falar = function () {return 'opa'}
console.log(obj.falar())

//Função como parametro 

function run (fun){
    fun()
}

run(function() {
    console.log('Executando..')
})

// 

