class CheckSyntax {
  checkArray(arr) {
    for (let x = 0; x < arr.length; x++) {
      const result = this.check(arr[x]);
      console.log(result ? 'OK' : 'NOT OK');
    }
  }

  check(text) {
    text = text.replace(/\s+/g, "");
    let endPostion = text.length - 1;
    for (let c = 0; c < text.length; c++) {
      const char = text[c];
      switch (char) {
        case "[":
          if ("]" !== text[endPostion]) {
            return false;
          }
          endPostion--;
          break;
        case "{":
          if ("}" !== text[endPostion]) {
            return false;
          }
          endPostion--;
          break;
        case "(":
          if (")" !== text[endPostion]) {
            return false;
          }
          endPostion--;
          break;
        default:
          break;
      }
    }
    return true;
  }
}

module.exports = CheckSyntax;
