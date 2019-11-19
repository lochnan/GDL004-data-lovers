/* Manejo de data */

// esta es una función de ejemplo

import {pokemon} from './data/pokemon/pokemon.js';

export const pokemonsByType = pokemon.filter((pokemones) => {
  if (pokemones.type.indexOf('Poison') !== -1) {
  return true;
  }
});