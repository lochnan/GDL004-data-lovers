/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import {pokemon} from './data/pokemon/pokemon.js'; //poner el typemodule//
import {pokemonsByName} from './data.js';


//Botones para abrir las  categorías
    document.getElementById("Bgrass").addEventListener("click", screenGrass); 

    function screenGrass () { 
         
        document.getElementById("main").style.display = "none";
        document.getElementById("grass").style.display = "block";
    
        // Obtentiendo un array donde sólo esta el pokemon "Pidgeot"
        let pokemonsNames = [pokemon].filter(pokemonsByName); // namePokemons es la función que traje para que filtre por name
        console.log(pokemonsNames);
    };


 


/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
