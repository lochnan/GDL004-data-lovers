/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import { pokemon } from './data/pokemon/pokemon.js'; // poner el typemodule//
import { pokemonsByType, orderABCByType, uniqueClasify } from './data.js';

/* const allClasify = uniqueClasify;
console.log(allClasify);

allClasify.forEach(categoryName => {
    template
});
*/

/* ----------- MOSTRAR FILTRADO ---------------------*/
/* Funciona que  cree un array con los nombres de los pekemones debido a que es una propiedad
del navegador
revisar https://stackoverflow.com/questions/25931810/why-is-document-getelementbyid-not-needed
const listCategories = [ Grass, Poison, Fire, Flying, Water, Bug, Normal, Electric, Ground,
Fighting, Psychic, Rock, Ice, Ghost, Dragon ];
listCategories.forEach(category => { category.addEventListener("click", screenGrass);
   console.log(listCategories)
});
*/

function welcomeToYou() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('main').style.display = 'block';
}

document.getElementById('welcomeButton').addEventListener('click', welcomeToYou);

// Regresar de página de pokemones filtrados a página principal de categorías

function home() {
  document.getElementById('categoryGrass').innerHTML = '';
  document.getElementById('grass').style.display = 'none';
  document.getElementById('reverseOrder').style.display = 'none';
  document.getElementById('grassOrder').style.display = 'none';
  document.getElementById('main').style.display = 'block';
}
document.getElementById('grasshead').addEventListener('click', home);

/* Función screenGrass que nos ayuda a pasar de botón y además tiene dentro el e.target,
además del template y la creación de los divs de forma dinámica */
let resultByType = [];

function screenGrass(e) { /* Necesito colocar la e porque es el parámetro  que
necesita la función para poder ejecutar el addEventListener */
// Haciendo que pase la página otra

  const x = e.target.id;
  document.getElementById('poketypeGrass').innerHTML = x;
  console.log(x); // Me ayuda a ver cual es el id en donde se  está dando el evento  de click

  document.getElementById('main').style.display = 'none';
  document.getElementById('reverseOrder').style.display = 'none';
  document.getElementById('grassOrder').style.display = 'none';
  document.getElementById('grass').style.display = 'block';
  document.getElementById('categoryGrass').style.display = 'block';

  /* Obteniendo la data al poner la función pokemonsByType del data.js, la que se obtiene
  al ponerle sus parámetros */
  const pokemonByTypeResult = pokemonsByType(pokemon, x);
  // console.log(pokemonByTypeResult);

  /* console.log(pokemonByTypeResult); Aquí muestra que se está obteniendo el valor de lo que hace s
    la función al ponerle los () y se guarda en una constante */

  /* CreateElment con un for para crear de forma dinámica los links
    de los pokemones según la categoría */
  console.log(pokemonByTypeResult);

  for (let i = 0; i < pokemonByTypeResult.length; i += 1) {
    const template = `
             <div class= "numCard"> <span> ${pokemonByTypeResult[i].num} </span> </div>   
             <div class="imgCard"> <a href="#windowModal" class="buttonModal"><img class="buttonModal" src= ${pokemonByTypeResult[i].img}></a> </div> 
             <div class="txtCard"> <span> ${pokemonByTypeResult[i].name} </span> </div>
        `;

    const cardDiv = document.createElement('div');
    document.getElementById('categoryGrass').appendChild(cardDiv);
    cardDiv.setAttribute('class', 'containerDiv');
    cardDiv.innerHTML = template;
  }

  resultByType = pokemonByTypeResult; // Para sacar el valor del scope local al scope global
}

// Botones para abrir las  categorías
document.getElementById('Bgrass').addEventListener('click', screenGrass);
document.getElementById('Bpoison').addEventListener('click', screenGrass);
document.getElementById('Bfire').addEventListener('click', screenGrass);
document.getElementById('Bflying').addEventListener('click', screenGrass);
document.getElementById('Bwater').addEventListener('click', screenGrass);
document.getElementById('Bbug').addEventListener('click', screenGrass);
document.getElementById('Bnormal').addEventListener('click', screenGrass);
document.getElementById('Belectric').addEventListener('click', screenGrass);
document.getElementById('Bground').addEventListener('click', screenGrass);
document.getElementById('Bfighting').addEventListener('click', screenGrass);
document.getElementById('Bpsychic').addEventListener('click', screenGrass);
document.getElementById('Brock').addEventListener('click', screenGrass);
document.getElementById('Bice').addEventListener('click', screenGrass);
document.getElementById('Bghost').addEventListener('click', screenGrass);
document.getElementById('Bdragon').addEventListener('click', screenGrass);

/* ---------------------- ORDENAR POKEMONES -----------------*/
// Función para obtener el sort para ordenar de la A a la Z

function orderAz() {
  document.getElementById('grassOrder').innerHTML = '';

  document.getElementById('categoryGrass').style.display = 'none';
  document.getElementById('reverseOrder').style.display = 'none';
  document.getElementById('grassOrder').style.display = 'block';

  const pokemonsTypeByOrder = orderABCByType(resultByType);

  for (let i = 0; i < pokemonsTypeByOrder.length; i += 1) {
    const templateOrder = `
        <div class= "numCard"> <span> ${pokemonsTypeByOrder[i].num} </span> </div>
        <div class="imgCard"><img src = "${pokemonsTypeByOrder[i].img}"></div>
        <div class="txtCard"> <span> ${pokemonsTypeByOrder[i].name} </span> </div>
        `;

    const cardDivOrder = document.createElement('div');
    document.getElementById('grassOrder').appendChild(cardDivOrder);
    cardDivOrder.setAttribute('class', 'containerDiv');
    cardDivOrder.innerHTML = templateOrder;
  }

  resultByType = pokemonsTypeByOrder;
  // return pokemonsTypeByOrder;
}

document.getElementById('order').addEventListener('click', orderAz);
// screenGrass(e);
// var y = orderAz();
// console.log(y);

/* ---------------------- ORDENAR POKEMONES AL REVÉS ---------*/

function orderZa() {
  // Para vaciar la pantalla y que no se acumulen los pokemones
  document.getElementById('reverseOrder').innerHTML = '';

  document.getElementById('categoryGrass').style.display = 'none';
  document.getElementById('grassOrder').style.display = 'none';
  document.getElementById('reverseOrder').style.display = 'block';

  const reversed = resultByType.reverse();

  for (let i = 0; i < reversed.length; i += 1) {
    const templateReverseOrder = `
        <div class= "numCard"> <span> ${reversed[i].num} </span> </div>
        <div class="imgCard"> <img src= "${reversed[i].img}" class="sizePokeCard"></div>
        <div class="txtCard"> <span> ${reversed[i].name} </span></div>
        `;

    const cardDivRevOrd = document.createElement('div');
    document.getElementById('reverseOrder').appendChild(cardDivRevOrd);
    cardDivRevOrd.setAttribute('class', 'containerDiv');
    cardDivRevOrd.innerHTML = templateReverseOrder;
  }
  // Get the button that opens the modal
  var btns = document.getElementsByClassName('containerDiv');
  console.log(btns);
  Array.prototype.forEach.call(btns, button => button.addEventListener('click', openModal)); 
}
document.getElementById('reverseOrderButton').addEventListener('click', orderZa);

// Modal
// Get the modal
let modal = document.getElementById('myModal');

// Get the span element that closes the modal
// var span = document.getElementsByClassName('closeModal');
let closeModal = document.querySelector('.closeModal');

// Function that opens the modal
function openModal() {
  modal.style.display = 'block';

  for (let i = 0; i < reversed.length; i += 1) { 
    const templateContentModal = `
    <div> ${'HOlA PROBANDO'} </div>
    `;
    
    const contentModal = document.createElement('div');
    document.getElementById('modal').appendChild(contentModal);
    contentModal.innerHTML = templateContentModal;
  }
}

// Function that closes de modal
closeModal.onclick = function closeModal() {
  modal.style.display = 'none';
};

/* CreateElment con un for para crear de forma dinámica los links
de los pokemones según la categoría de Grass
for (let i = 0; i < pokemonByTypeResult.length; i++) {
    let cardDiv = document.createElement('div');
    let imgDiv = document.createElement('img');
    let txtDiv = document.createElement('span');
    let numDiv = document.createElement('span');
    cardDiv.appendChild(imgDiv);

    cardDiv.appendChild(txtDiv);
    cardDiv.appendChild(numDiv);

    imgDiv.setAttribute('class', 'democlass');
    imgDiv.setAttribute('src', pokemonByTypeResult[i].img);
    cardDiv.setAttribute('class', 'cardClass');
    txtDiv.innerHTML = `<p>${pokemonByTypeResult[i].name}</p>`;
    numDiv.innerHTML = `<p>${pokemonByTypeResult[i].num}<p>`;

    document.getElementById('categoryGrass').appendChild(cardDiv); */
