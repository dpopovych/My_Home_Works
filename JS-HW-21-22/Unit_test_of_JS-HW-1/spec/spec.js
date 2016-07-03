var app = require('../js/script.js');

describe("app", function() {
  it("the result of positive numbers should be", function() {
    expect(app.pow(2, 3)).toEqual(8);
  }); //to the power positive number

  it("the result of zero in any power is always zero", function() {
    expect(app.pow(0, 4)).toEqual(0);
  }); //zero to the any power is zero

  it("the result of one in any power is one", function() {
    expect(app.pow(1, 3)).toEqual(1);
  }); // one to the any power is one
});
