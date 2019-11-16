/* Manejo de data */
// esta es una función de ejemplo


import {pokemon} from './data/pokemon/pokemon.js';

export const pokemonsByName = pokemon.filter((pokemones) => {
  return pokemones.name == 'Bulbasaur';
  });


/* ----- NOTAS ----- /*

/* Para declarar una función que hace que filtre pokemones 
por su valor de name.

function namePokemons(pokemones) {
  return pokemones.name;
};

¿otra forma de escribirlo? Ver https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions
  var namePokemons = (pokemones) => {
    return pokemones.name;
  };
}
Esta sería una función que se puede aplicar a un array como:
var mayVar = [array].filter(namePokemons); 
y se guardaría en la variable myVar
Revisar filtrando objetos pequeños en array.prototype.filter()
 https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter

-----------

Si tengo en array por ejemplo 
pokemon =  [{
  id: 1,
  num: '001',
  name: 'Bulbasaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
  type: [
    'Grass',
    'Poison',
  ],
  height: '0.71 m',
  weight: '6.9 kg',
  candy: 'Bulbasaur Candy',
  candy_count: 25,
  egg: '2 km',
  spawn_chance: 0.69,
  avg_spawns: 69,
  spawn_time: '20:00',
  multipliers: [1.58],
  weaknesses: [
    'Fire',
    'Ice',
    'Flying',
    'Psychic',
  ],
  next_evolution: [{
    num: '002',
    name: 'Ivysaur',
  }, {
    num: '003',
    name: 'Venusaur',
  }],
}, {
  id: 2,
  num: '002',
  name: 'Ivysaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
  type: [
    'Grass',
    'Poison',
  ],
  height: '0.99 m',
  weight: '13.0 kg',
  candy: 'Bulbasaur Candy',
  candy_count: 100,
  egg: 'Not in Eggs',
  spawn_chance: 0.042,
  avg_spawns: 4.2,
  spawn_time: '07:00',
  multipliers: [
    1.2,
    1.6,
  ],
  weaknesses: [
    'Fire',
    'Ice',
    'Flying',
    'Psychic',
  ],
  prev_evolution: [{
    num: '001',
    name: 'Bulbasaur',
  }],
  next_evolution: [{
    num: '003',
    name: 'Venusaur',
  }]

A este le puedo aplicar, que es la sintaxis del método filter.prototype
pokemon.filter(pokemones => {
  return pokemones.name == "Ivysaur"";
});

Me regresa un nuevo array en donde está Ivysaur
Por ejemplo:
0: {id: 2, num: "002", name: "Charmeleon", img: "http://www.serebii.net/pokemongo/pokemon/005.png", type: Array(1), …}
length: 1
*/


/* Manejo de data */
// esta es una función de ejemplo
//export const example = () => {
//return 'example';
//};
