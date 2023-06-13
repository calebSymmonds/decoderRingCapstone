const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const polybiusSquare = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I/J", "K"],
      ["L", "M", "N", "O", "P"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"],
    ];
    if (!encode) {
      const words = input.split(" ");
      let nonSpaceCharacterCount = 0;
      for (const word of words) {
        nonSpaceCharacterCount += word.length;
      }
      if (nonSpaceCharacterCount % 2 !== 0) {
        return false;
      }
      const decodedMessage = words
        .map((group) => {
          let pairs = [];
          for (let i = 0; i < group.length; i += 2) {
            const pair = group.slice(i, i + 2);
            if (pair === "42") {
              pairs.push("(i/j)");
            } else {
              const row = parseInt(pair.charAt(1)) - 1;
              const col = parseInt(pair.charAt(0)) - 1;
              pairs.push(polybiusSquare[row][col]);
            }
          }
          return pairs.join("");
        })
        .join(" ");
      let lowercase = decodedMessage.toLowerCase();
      return lowercase;
    }
    const encodedMessage = input
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char === "I" || char === "J") return "42";
        if (char === " ") return " ";
        const rowIndex = polybiusSquare.findIndex((row) => row.includes(char));
        if (rowIndex === -1) return char;
        const colIndex = polybiusSquare[rowIndex].indexOf(char);
        return `${colIndex + 1}${rowIndex + 1}`;
      })
      .join("");
    return encodedMessage;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };