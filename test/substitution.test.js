const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should encode a message using the substitution cipher", () => {
    const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "ykrrpik";
    expect(actual).to.equal(expected);
  });

  it("should decode a message using the substitution cipher", () => {
    const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);
    const expected = "message";
    expect(actual).to.equal(expected);
  });

  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    const actual1 = substitution("thinkful", "short");
    const actual2 = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual1).to.be.false;
    expect(actual2).to.be.false;
  });

  it("should correctly translate the given phrase based on the alphabet", () => {
    const actual = substitution("hello", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "jkvvc";
    expect(actual).to.equal(expected);
  });

  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("thinkful", "plmoknijbuhvygctfxrdzeswaqp");
    expect(actual).to.be.false;
  });

  it("should maintain spaces in the message", () => {
    const actual = substitution("hello world", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "jkvvc scxvo";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = substitution("Hello World", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "jkvvc scxvo";
    expect(actual).to.equal(expected);
  });
});