global.window=global
global.chai=require("chai");
global.expect=require("chai").expect;
global.expect=require("chai").assert;
require('../src/data/pokemon/pokemon.js')
require('../src/data.js');

const assert = require("assert"); 

describe('pokego', () => {
  it('deberia ser un objeto', () => {
    assert.ok(typeof window.pokego, 'object');
  });
});

describe('pokego2', () => {
  it('deberia ser un objeto', () => {
    assert.ok(typeof window.pokego2, 'object');
  });
});



describe('pokego2.filterData', () => {
  it('debería ser una función', () => {
    assert.ok(typeof window.pokego2.filterData, 'function');
  })
});


describe('data.filter', () => {
  it('debería retornar "Bulbasaur al seleccionar pokemon de tipo Veneno"', () => {
    assert.equal(window.pokego2.filterData(window.POKEMON.pokemon, "Poison")[0].name,"Bulbasaur") 

    })

  });

 
describe('pokego.sortData', () => {
    it('deberia ser una funcion', ()=>{
      assert.ok(typeof window.pokego.sortData, 'function');

    })

    it ('deberia retornar "los nombres de los pokemon por orden alfabetico"', () =>{
      let orderAz = window.pokego.sortData(window.POKEMON.pokemon,"name", "a-z")
      assert.deepEqual([orderAz[0].name, orderAz[1].name, orderAz[2].name],["Abra", "Aerodactyl", "Alakazam"]) 

    
    })

    it ('deberia retornar "los nombres de los pokemones por orden ascendente"', () => {
      let orderZa = window.pokego.sortData(window.POKEMON.pokemon, "name", "z-a")
      assert.deepEqual([orderZa[0].name, orderZa[1].name, orderZa[2].name], ["Zubat", "Zapdos", "Wigglytuff"]) 


      })

    it ('deberia retortar "los pokemones por orden numerico"', () => {
      let orderNumber = window.pokego.sortData(window.POKEMON.pokemon, "number", "1-151")
      assert.deepEqual([orderNumber[0].id, orderNumber[1].id, orderNumber[2].id], [1, 2, 3])
      
    })
      
  });

