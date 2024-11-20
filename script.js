const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const spriteContainer = document.getElementById("sprite-container");
const upperContainer = document.querySelector(".upper");
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
        updateColorBasedOnType(upperContainer,"base");
        clearUi();
    }
}

const updateStats = (data) => {
    pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    pokemonId.textContent = `NO. ${data.id}`;
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
        types.innerHTML += `<p class="type ${type.type.name}">${type.type.name}</p>`;
    });

    updateColorBasedOnType(upperContainer, data.types[0].type.name);
}

const updateSprite = (src) => {
    spriteContainer.innerHTML = `<img id="sprite" src="${src}" alt="sprite" class="pokemon-sprite">`
}

const updateColorBasedOnType = (element, type) => {
    element.className = "";
    element.className = `upper ${type}`;
}

const clearUi = () => {
    pokemonName.textContent = "";
    pokemonId.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
    spriteContainer.innerHTML = "";
}

const clearTypes = () => {
    types.innerHTML = "";
}

searchBtn.addEventListener("click", () => {
    clearTypes();
    fetchData(searchInput.value.toLowerCase());
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        clearTypes();
        fetchData(searchInput.value.toLowerCase());
    }
});


