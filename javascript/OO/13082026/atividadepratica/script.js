class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        this.preco = this.preco - (this.preco * this.desconto / 100)
    }
}
class Estoque {
    constructor() {

        this.produtos = [];

    }

    adicionarProduto(produto) {
        produto.aplicarDesconto();
        this.produtos.push(produto);
    }

    excluirProduto(indice) {
        this.produtos.splice(indice, 1);
        this.exibirInformacoes();
    }

    exibirInformacoes() {

        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = "";
        this.produtos.forEach((produto, indice) => {
            resultado.innerHTML += `
            <div>
                <p>nome: ${produto.nome}</p>
                <p>preço: ${produto.preco}</p>
                <p>categoria: ${produto.categoria}</p>
                <p>desconto: ${produto.desconto}</p>
                <button onclick="estoque.excluirProduto(${indice})">Excluir</button>
                <hr>
            </div>
        `;
        });
    }
}

const estoque = new Estoque();

const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaocadastrar = document.querySelector("#botaocadastrar");

botaocadastrar.addEventListener("click", function () {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);

    // produto.push(produto);
    // console.log(produto)
    // produto.adicionarAluno(produto);
    // produto.aplicarDesconto();
    estoque.adicionarProduto(produto);
    estoque.exibirInformacoes();

});

