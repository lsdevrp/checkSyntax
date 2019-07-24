class CheckSyntax2 {
  constructor() {
    this.leftChars = ["[", "{", "("];
    this.rightChars = ["]", "}", ")"];
  }

  checkArray(arr) {
    for (let x = 0; x < arr.length; x++) {
      const result = this.check(arr[x]);
      console.log(result ? "OK" : "NOT OK");
    }
  }

  check(text) {
    text = text.replace(/\s+/g, "");

    const leftOccurs = [];
    for (let c = 0; c < text.length; c++) {
      const char = text[c];
      const leftIdx = this.leftChars.indexOf(char);
      if (leftIdx > -1) {
        leftOccurs.push(leftIdx);
      } else {
        const rightIdx = this.rightChars.indexOf(char);
        if (rightIdx > -1) {
          if (leftOccurs.length === 0 || leftOccurs.pop() !== rightIdx) {
            return false;
          }
        }
      }
    }

    if (leftOccurs.length !== 0) {
      return false;
    }
    return true;
  }
}

module.exports = CheckSyntax2;
