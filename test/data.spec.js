// importamos la función `example`
import pokemonsByType from '../src/data';

// Para probar la función que filtra a los pokemones por categoría
describe('Filter', () => {
  it('must be a function', () => {
    expect(typeof pokemonsByType).toBe('function');
  });
});

//describe('example', () => {
// escribe aquí tu test
//});