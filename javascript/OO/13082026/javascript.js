class Aluno {

    constructor(nome, idade, curso, matricula) {

        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;

    }

    estudar() {
        console.log(`${this.nome} está estudando`);
    }

    apresentar() {
        console.log(`${this.nome} esta fazendo uma otima apresentaçao!`);
    }


}

class Turma {

    constructor() {

        this.alunos = [];

    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    exibirNaTela() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        alunos.forEach(aluno => {

            resultado.innerHTML += `
            <div>
                <p>${aluno.nome}</p>
                <p>idade: ${aluno.idade}</p>
                <p>curso: ${aluno.curso}</p>
                <p>matrícula: ${aluno.matricula}</p>
            </div>
        `;
        });

    }
}

const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");
const matricula = document.querySelector("#matricula");
const botaocadastrar = document.querySelector("#botaocadastrar");

botaocadastrar.addEventListener("click", function () {

    const aluno = new Aluno(nome.value, idade.value, curso.value, matricula.value);

    alunos.push(aluno);
    console.log(alunos);
    // aluno.exibirNaTela();
    Turma.adicionarAluno(aluno);
    Turma.exibirNaTela();

});


// const aluno1 = new Aluno("João", 20, "Engenharia", "12345");
// aluno1.exibirNaTela();

// aluno1.estudar()

// const aluno2 = new Aluno("Maria", 22, "Medicina", "67890");
// aluno2.exibirNaTela();

// aluno2.apresentar()

// console.log("--------------------------------------");
// console.log("atribuir aluno1");
// console.log("nome: ", aluno1.nome);
// console.log("idade: ", aluno1.idade);
// console.log("curso: ", aluno1.curso);
// console.log("matricula: ", aluno1.matricula);
// console.log("--------------------------------------");

// console.log("--------------------------------------");
// console.log("atribuir aluno2");
// console.log("nome: ", aluno2.nome);
// console.log("idade: ", aluno2.idade);
// console.log("curso: ", aluno2.curso);
// console.log("matricula: ", aluno2.matricula);
// console.log("--------------------------------------");

