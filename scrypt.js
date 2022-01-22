// --------1---------------------------------------
function anagram(word, arr) {
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i].toLowerCase().split("").sort().join("");
    let w = word.toLowerCase().split("").sort().join("");
    if (a == w) {
      console.log(arr[i]);
    }
  }
}
anagram("listen", ["enlists", "google", "inlets", "banana"]);
// -----2------------------------------------------------------------------
function del(a, b) {
  let text = a.split(" ");
  text1 = text.filter((item) => item !== b);
  console.log(text1.join(" "));
}
del("this is some text", "is");
// -----3--------------------------------------------------------
function reg(a, b) {
  let x = [];
  b.forEach((word) => {
    a = a.replace("_", word);
    x.push(a);
  });
  console.log(x[x.length - 1]);
}
reg("_ we have a _", ["Houston", "problem"]);
// ------4------------------------------------------------------------

function long(a) {
  let str = a.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i < str.length - 1; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}
console.log(long("Lorem ipsum charsett dolor sit amet."));

// ---------5-----------------------------
function myfn(arr, fn) {}
