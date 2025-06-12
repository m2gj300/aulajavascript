// declarando a classe
class Pessoa{

    //atributos da classe
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    //declarando um método
    saudar() {
        return `ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }

}


//Instânciando
const pessoa1 = new Pessoa("Ana", 35);
const pessoa2 = new Pessoa("João", 28);
console.log(pessoa1.saudar());
console.log(pessoa2.saudar());


//Nova classe
class Carro {

    //atributos
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    //método
    exibirInfo(){
        return `Carro: ${this.marca} ${this.modelo})`;
    }
}

//Instância
const meuCarro = new Carro("Fusca", "1974");
console.log(meuCarro.exibirInfo());
