/* global quadtree, describe, it, expect, should */

describe('quadtree()', function () {
  'use strict';

  var quad;
  beforeEach(function () {
    quad = new Quad(2,2);
    quad.insert(4,-1);
    quad.insert(1,-3);
    quad.insert(-2,-2);
    quad.insert(-3,4);
    quad.insert(8,3);
    quad.insert(5,5);
    quad.insert(6,6);
    quad.insert(6,9);
  });

  it('exists', function () {
    expect(Quad).to.be.a('function');

  });

  it('stores values', function () {
    expect(quad.contains(1,-3)).to.equal(true);
    expect(quad.contains(-3,4)).to.equal(true);
    expect(quad.contains(8,3)).to.equal(true);
    expect(quad.contains(6,6)).to.equal(true);
  });

  it('gathers values from a zone', function () {
    expect(quad.allInZone([7,4],[7,10],[4,4],[4,10]).toString()).to.equal([[5,5],[6,6],[6,9]].toString());
  });

  // Add more assertions here
});
