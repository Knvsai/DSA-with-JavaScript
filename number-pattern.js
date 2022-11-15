let n = 5; // height of pattern
let string = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i ; j++) {
      string += n - i;
    }
    string += "\n";
  }
// External loop
for (let i = 2; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += i;
  }
  string += "\n";
}
console.log(string);