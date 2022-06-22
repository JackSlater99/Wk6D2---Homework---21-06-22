const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("T-Rex", "Carnivore", 100);
    dinosaur2 = new Dinosaur("Velociraptor", "Carnivore", 75);
    dinosaur3 = new Dinosaur("Pterodactyl", "Carnivore", 50);
    dinosaur4 = new Dinosaur("One with the big neck", "Herbivore", 25);
    dinosaur_list = [dinosaur1, dinosaur2, dinosaur3];
    park = new Park('Jurassic Park', 100, dinosaur_list)
  });

  it('should have a name', function () {
    const actual = park.parkName;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.strictEqual(actual, dinosaur_list)
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur3);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.findMostAttractiveDino();
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular diet', function () {
    park.addDinosaur(dinosaur4);
    const actual = park.findByDiet('Carnivore').length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.calculateVisitors();
    assert.strictEqual(actual, 225);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.calculateVisitorsPerYear();
    assert.strictEqual(actual, 82125);
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = park.calculateYearlyRevenue();
    assert.strictEqual(actual, 8212500);
  });

});
