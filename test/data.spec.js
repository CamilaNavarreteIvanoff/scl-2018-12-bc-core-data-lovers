global.window=global
global.chai=require("chai");
require('../src/data.js');
require('../src/data/pokemon/pokemon.js')

const assert = require("assert"); 

describe('pokego', () => {
  it('deberia ser un objeto', () => {
    assert.equal(typeof window.pokego, 'object');
  });
});


describe('pokego.filterData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.pokego2.filterData, 'function');
  })

  it('debería retornar "Dewgong", "Cloyster", "Jynx", "Lapras", "Articuno" para "type" de "Ice"', () => {
    assert.equal(window.pokego2.filterData("type", "Ice"), ["Dewgong", "Cloyster", "Jynx", "Lapras", "Articuno"])
  })
});

