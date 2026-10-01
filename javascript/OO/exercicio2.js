class Aluno {
    constructor(nome, idade, curso, matricula){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    aprender(){
        console.log(`${this.nome} está aprendendo.`);
    }
    estudar(){
        console.log(`${this.nome} está estudando ${this.curso}.`);
    }
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}, e estou cursando ${this.curso}.`);
    }

}

const aluno1 = new Aluno("João", 20, "Engenharia", "12345");
console.log("Aluno 1: ", aluno1);

const aluno2 = new Aluno("Maria", 22, "Medicina", "67890");
console.log("Aluno 2: ", aluno2);

const aluno3 = new Aluno("Pedro", 19, "Direito", "54321");
console.log("Aluno 3: ", aluno3);

const aluno4 = new Aluno("Ana", 21, "Arquitetura", "98765");
console.log("Aluno 4: ", aluno4);

const aluno5 = new Aluno("Lucas", 23, "Administração", "13579");
console.log("Aluno 5: ", aluno5);

console.log("------------------------------------");
console.log("Atributos do Aluno 1");
console.log("Nome: ", aluno1.nome);
console.log("Idade: ", aluno1.idade);
console.log("Curso: ", aluno1.curso);
console.log("Matrícula: ", aluno1.matricula);
console.log("------------------------------------");

console.log("-------------------------------------");
console.log("Atributos do Aluno 2");
console.log("Nome: ", aluno2.nome);
console.log("Idade: ", aluno2.idade);
console.log("Curso: ", aluno2.curso);
console.log("Matrícula: ", aluno2.matricula);
console.log("------------------------------------");

console.log("-------------------------------------");
console.log("Atributos do Aluno 3");
console.log("Nome: ", aluno3.nome);
console.log("Idade: ", aluno3.idade);
console.log("Curso: ", aluno3.curso);
console.log("Matrícula: ", aluno3.matricula);
console.log("------------------------------------");

console.log("-------------------------------------");
console.log("Atributos do Aluno 4");
console.log("Nome: ", aluno4.nome);
console.log("Idade: ", aluno4.idade);
console.log("Curso: ", aluno4.curso);
console.log("Matrícula: ", aluno4.matricula);
console.log("------------------------------------");

console.log("-------------------------------------");
console.log("Atributos do Aluno 5");
console.log("Nome: ", aluno5.nome);
console.log("Idade: ", aluno5.idade);
console.log("Curso: ", aluno5.curso);
console.log("Matrícula: ", aluno5.matricula);
console.log("------------------------------------");

aluno1.aprender();

aluno2.estudar();

aluno3.apresentar();

aluno4.estudar();

aluno5.aprender();