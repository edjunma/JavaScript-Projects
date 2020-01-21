const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

fetchPokemons();

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
}