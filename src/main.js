/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import {pokemon} from './data/pokemon/pokemon.js'; //poner el typemodule//
import {pokemonsByType} from './data.js';
import {typeStringPokemons} from './data.js';




//Botones para abrir las  categorías
    document.getElementById("Bgrass").addEventListener("click", screenGrass); 

    function screenGrass () { 
         //Haciendo que pase la págin a
        document.getElementById("main").style.display = "none";
        document.getElementById("grass").style.display = "block";
        

        let resultByType = pokemonsByType;
        console.log(resultByType);

        document.getElementById("categoryGrass").innerHTML = typeStringPokemons;

     
    };


 


/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
