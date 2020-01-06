/* Manejo de data *
// esta es una función de ejemplo */

import { pokemon } from './data/pokemon/pokemon.js';


// PARA OBTENER UN ARRAY CON LOS NOMBRES DE LAS CATEGORÍAS
// Haciendo un nuevo array
const clasify = [];
// Obteniendo los tipos de pokemones pero me aparece toda la lista con los tipos repetidos
const filterCategories = pokemon.filter((pokemones) => pokemones.type.forEach((type) => {
  clasify.push(type);
}));

export const uniqueClasify = Array.from(new Set(clasify));
console.log(uniqueClasify);
/* Para obtener un nuevo array sin los elementos repetidos ver página
https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c */

/* Otra forma de reducir los elementos repetidos de un array
const uniqueSet = new Set(clasify);
const backtoarray = [...uniqueSet];
*/

// FUNCIÓN para obtener el filtrado por categoría
export const pokemonsByType = (pokemons, x) => pokemon.filter((pokemones) => pokemones.type.indexOf(x) !== -1);
/* Lo que hace indexOf es que me da el índice, pero igual retorna -1 cuando un elemento no está y
cero cuando si está, así que eso lo usé y coloqué que si el strting "Poison" es diferente de -1
(o sea no encontrado) regresara true. Es probable que funcione porque sólo tengo un tipo fuego en
cada uno de los objetos, ya que indexOf solo
regresa el primer index en el que el elemento puede ser encontrado */

// FUNCIÓN para obtener el sort para ordenar de la A a la Z
export const orderABCByType = (pokemonByTypeResult) => pokemonByTypeResult.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } if (a.name < b.name) {
    return -1;
  }
  return 0;
});





/* ----- NOTAS ----- /*

export const pokemonsByType = pokemon.filter((pokemones) => {
    if (pokemones.type.indexOf('Poison') !== -1) {
      return true;
    }
});

export const pokemonsByType = pokemon.filter((pokemones) => {

  var resultado = false;

  if (pokemones.type.indexOf('Poison') === -1) {
    resultado = false;

  } else {
    resultado = true;
  }
  return resultado;
});


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
*/

/* pokemon =  [{
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
}]
*/

/*
A este le puedo aplicar, que es la sintaxis del método filter.prototype
pokemon.filter(pokemones => {
  return pokemones.name == "Ivysaur"";
});

Me regresa un nuevo array en donde está Ivysaur
Por ejemplo:
0: {id: 2, num: "002", name: "Charmeleon", img: "http://www.serebii.net/pokemongo/pokemon/005.png", type: Array(1), …}
length: 1
*/


/* Manejo de data
// esta es una función de ejemplo
//export const example = () => {
//return 'example';
//}};
*/
