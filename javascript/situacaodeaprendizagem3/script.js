const inputICAO = document.getElementById("icaoInput");
const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

const icaoSelect = document.getElementById("icaoSelect");

icaoSelect.addEventListener("change", function() {

    inputICAO.value = icaoSelect.value;

});

botao.addEventListener("click", buscarAviao);

async function buscarAviao() {
    const icao = inputICAO.value.trim().toUpperCase();

    if (!icao) {
        resultado.innerHTML = "<p>Selecione um código ICAO.</p>";
        return;
    }

    resultado.innerHTML = "<p>Pesquisando...</p>";

    try {
        const resposta = await fetch(
            `https://api.adsbdb.com/v0/aircraft/${icao}`
        );

        if (!resposta.ok) {
            throw new Error("Aeronave não encontrada");
        }

        const dados = await resposta.json();
        const aviao = dados.response.aircraft;

        resultado.innerHTML = `
            <h2>${aviao.type}</h2>

            <p><strong>Fabricante:</strong> ${aviao.manufacturer}</p>

            <p><strong>Código ICAO:</strong> ${aviao.mode_s}</p>

            <p><strong>Matrícula:</strong> ${aviao.registration}</p>

            <p><strong>País:</strong> ${aviao.registered_owner_country_name}</p>

            <p><strong>Proprietário:</strong> ${aviao.registered_owner}</p>

            ${
                aviao.url_photo
                ? `<img src="${aviao.url_photo}" width="400">`
                : "<p>Foto não disponível.</p>"
            }
        `;

    } catch (erro) {
        resultado.innerHTML = `
            <p> Avião não encontrado.</p>
            <p>Verifique o código ICAO informado.</p>
        `;
    }
}