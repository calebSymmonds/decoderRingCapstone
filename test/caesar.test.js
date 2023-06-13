const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should encode a message using the Caesar cipher", () => {
    const actual = caesar("Zebra Magazine", 3);
    const expected = "cheud pdjdclqh";
    expect(actual).to.equal(expected);
  });

  it("should decode a message using the Caesar cipher", () => {
    const actual = caesar("cheud pdjdclqh", 3, false);
    const expected = "zebra magazine";
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    const actual1 = caesar("thinkful", 0);
    const actual2 = caesar("thinkful", -26);
    const actual3 = caesar("thinkful", 26);
    const actual4 = caesar("thinkful");
    expect(actual1).to.be.false;
    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
    expect(actual4).to.be.false;
  });

  it("should ignore capital letters", () => {
    const actual = caesar("A Message", 1);
    const expected = "b nfttbhf";
    expect(actual).to.equal(expected);
  });

  it("should handle shifts that go past the end of the alphabet", () => {
    const actual = caesar("Zebra", 3);
    const expected = "cheud";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and non-alphabetic symbols", () => {
    const actual = caesar("Hello, World!", 5);
    const expected = "mjqqt, btwqi!";
    expect(actual).to.equal(expected);
  });
});
