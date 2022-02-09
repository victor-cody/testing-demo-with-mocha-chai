const { expect } = require("chai");
const { add } = require("../addition.js");

describe("the add function", () => {
  it("should add two numbers", () => {
    const result = add(2, 2);
    expect(result).to.be.equal(4);
  });

  it("should be able to handle a single argument and return 0 when no arguments are passed", () => {
    const case1 = add(2);
    expect(case1).to.be.equal(2);
    const case2 = add();
    expect(case2).to.be.equal(0);
  });

  // it("should return nothing when one of the arguments is not a number", () => {
  //   const result = add("a", 2);
  //   expect(result).to.be.undefined;
  // });
});
