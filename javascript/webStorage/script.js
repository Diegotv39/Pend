const nome = document.querySelector("#nome");
const botaosalvar = document.querySelector("#salvar");
const botaorecuperar = document.querySelector("#recuperar");
const botaoexcluir = document.querySelector("#excluir");

const resultado = document.querySelector("#resultado");

//salvar
botaosalvar.addEventListener("click", function () {
     
    localStorage.setItem("nome", nome.value);

    resultado.textContent = "Nome salvo!";
});

//recuperar
botaorecuperar.addEventListener("click", function () {
    const nomerecuperado = localStorage.getItem("nome");
    
    resultado.textContent = `Nome armazenado/recuperado: ${nomerecuperado}`;
});

//excluir
botaoexcluir.addEventListener("click", function () {
    localStorage.removeItem("nome");

    resultado.textContent = "Nome excluído!";
});
