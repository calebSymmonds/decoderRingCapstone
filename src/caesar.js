const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
  if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
  const inputChars = input.toLowerCase().split("");
  let result = "";
  for (let char of inputChars) {
    if (char >= "a" && char <= "z") {
      const charCode = char.charCodeAt(0);
      let shiftedCharCode;
      if (encode) {
        shiftedCharCode = ((charCode - 97 + shift + 26) % 26) + 97;
      } else {
        shiftedCharCode = ((charCode - 97 - shift + 26 * 2) % 26) + 97;
      }
      result += String.fromCharCode(shiftedCharCode);
    } else {
      result += char;
    }
  }
  return result;
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };