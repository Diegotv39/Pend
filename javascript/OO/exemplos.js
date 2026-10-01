//classe
class Carro{

    //
    constructor(marca, modelo, ano, cor){

        //atributo
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
//
ligar() {
    console.log("Carro ligado");
}
//
Acelerar() {
    console.log("Carro acelerando");
}

frear() {
    console.log(`${this.modelo} freou`);
}

}

const carro1 = new Carro("volkswagen", "Gol", 2022, "Branco");
console.log("carro 1: ", carro1);

const carro2 = new Carro("Toyota", "corolla", 2021, "Preto");
console.log("carro 2: ", carro2);

const carro3 = new Carro("Chevrolet", "Camaro", 2018, "Amarelo");
console.log("carro 3: ", carro3);

console.log("---------------------");
console.log("Atributos de carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("---------------------")

console.log("---------------------");
console.log("Atributos de carro 2: ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("---------------------")

console.log("---------------------");
console.log("Atributos de carro 3: ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("---------------------")

//metodos
carro1.ligar();

//
carro1.Acelerar();

carro2.frear();