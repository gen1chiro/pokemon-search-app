const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const spriteContainer = document.getElementById("sprite-container");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const fetchData = async (input) => {
    try {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}/`);
        const data = await res.json();
        console.log(data);
        updateStats(data);
    } catch (err) {
        alert("Pokémon not found");
    }
}

const updateStats = (data) => {
    pokemonName.textContent = data.name;
    pokemonId.textContent = data.id;
    weight.textContent = data.weight;
    height.textContent = data.height;
    updateSprite(data.sprites.front_default);
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    data.types.forEach(type => {
        types.innerHTML += `<span>${type.type.name}</span>`;
    })
}

const updateSprite = (src) => {
    spriteContainer.innerHTML = `<img id="sprite" src="${src}" alt="sprite">`
}

const clearTypes = () => {
    types.innerHTML = "";
}

searchBtn.addEventListener("click", () => {
    clearTypes();
    fetchData(searchInput.value.toLowerCase());
});


