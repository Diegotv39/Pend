const input = document.getElementById("pokemonInput");
const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

async function buscarPokemon() {
    const pokemon = input.value.toLowerCase();

    if (!pokemon) {
        resultado.innerHTML = "<p>Digite o nome ou ID de um Pokémon.</p>";
        return;
    }

    try {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );

        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado.");
        }

        const dados = await resposta.json();

        resultado.innerHTML = `
            <h2>${dados.name}</h2>

            <img 
                src="${dados.sprites.front_default}" 
                alt="${dados.name}"
            >

            <p><strong>ID:</strong> ${dados.id}</p>

            <p><strong>Altura:</strong> ${dados.height / 10} M</p>

            <p><strong>Peso:</strong> ${dados.weight / 10} Kg</p>

            <p>
                <strong>Tipos:</strong>
                ${dados.types
                    .map(tipo => tipo.type.name)
                    .join(", ")}
            </p>

            <p>
                <strong>Habilidades:</strong>
                ${dados.abilities
                    .map(habilidade => habilidade.ability.name)
                    .join(", ")}
            </p>
        `;

    } catch (erro) {
        resultado.innerHTML = `<p>Erro: ${erro.message}</p>`;
    }
}

botao.addEventListener("click", buscarPokemon);