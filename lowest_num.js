// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowestNumfinder(arr) {
  let sum = arr[0];
  for (let item of arr) {
    if (sum > item) {
      sum = item;
    }
  }
  return sum;
}

const heights2 = lowestNumfinder([167, 190, 120, 165, 137]);
console.log(heights2);
