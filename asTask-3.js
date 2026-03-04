/*function signature/sample */
function checkDigitsInName(name) {
  let regEx = /\d/;

  if (typeof name !== "string") {
    return "invalid input";
  } else if (regEx.test(name)) {
    return true;
  } else {
    return false;
  }
}

const userName = checkDigitsInName(9);
console.log(userName);
