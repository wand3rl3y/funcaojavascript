const pessoa = {
    saudacao : 'Bom dia',

    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
//conflito de OO com função 
const falar  = pessoa.falar
falar()
// Usando o bind 
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()