'use strict';

const pokemonContainer = document.querySelector('.poke-container');
const POKEMON_COUNT = 50;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
};

const MAIN_TYPES = Object.keys(colors);

const fetchPokemons = async () => {
    for (let index = 1; index < POKEMON_COUNT; index++) {
        await getPokemon(index);
    }
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    createPokemonCard(pokemon);
};

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('article');
    pokemonEl.classList.add('pokemon');
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    const pokeTypes = pokemon.types.map((type) => type.type.name);
    const type = MAIN_TYPES.find((type) => pokeTypes.indexOf(type) > -1);
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    const pokemonHTML = `
        <div class="back">
            <div class="img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=${name}>
            </div>
            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${name}</h3>
                <smal class="type">Type: <span>${type}</span></smal>        
            </div>
        </div>
    `;

    pokemonEl.insertAdjacentHTML('afterbegin', pokemonHTML);

    pokemonContainer.appendChild(pokemonEl);
};
fetchPokemons();
