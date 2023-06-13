const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should encode a message using the Polybius square", () => {
    const actual = polybius("message");
    const expected = "23513434112251";
    expect(actual).to.equal(expected);
  });

  it("should decode a message using the Polybius square", () => {
    const actual = polybius("23513434112251", false);
    const expected = "message";
    expect(actual).to.equal(expected);
  });

  it("should translate the letters i and j to 42 when encoding", () => {
    const actual = polybius("jinx");
    const expected = "42423335";
    expect(actual).to.equal(expected);
  });

  it("should translate 42 to (i/j) when decoding", () => {
    const actual = polybius("42423335", false);
    const expected = "(i/j)(i/j)nx";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = polybius("A Message");
    const expected = "11 23513434112251";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message", () => {
    const actual = polybius("Hello World");
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });
});