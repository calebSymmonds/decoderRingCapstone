const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const uniqueChars = [...new Set(alphabet)];
    if (uniqueChars.length !== 26) return false;
    const inputChars = input.toLowerCase().split("");
    let result = "";
    for (let char of inputChars) {
      if (char === " ") {
        result += " ";
        continue;
      }
      const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
      if (index === -1) {
        result += char;
      } else {
        result += encode ? alphabet[index] : standardAlphabet[index];
      }
    }
    return result;
  }  
  return {
    substitution,
  };
})();

module.exports = substitutionModule;