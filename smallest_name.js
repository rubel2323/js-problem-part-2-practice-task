// // Task -2:
// Find the friend with the smallest name.
// const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(nameArr) {
  let name = nameArr[0];
  for (let result of nameArr) {
    if (name.length > result.length) {
      name = result;
    }
  }
  return name;
}

const names = smallestName(["rahim", "robi", "rafi", "ron", "y", "rashed"]);
console.log(names);
