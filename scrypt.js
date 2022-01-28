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

let persons = [
  {
    name: "Aram",
    age: function () {
      return Math.floor(Math.random() * 100);
    },
    country: "USA",
    vote: 1,
  },
];

function addPerson() {
  let name = document.getElementById("personName").value;

  let exist = persons.find((p) => p.name === name);

  if (exist) {
    exist.vote += 1;
  } else {
    let person = {
      name: name,
      age: function () {
        return Math.floor(Math.random() * 100);
      },
      country: "USA",
      vote: 1,
    };
    persons.push(person);
  }

  console.log(persons);
  sortPersons(persons);
  createTable(persons);
}

function createTable(array) {
  let tbody = document.createElement("tbody");
  tbody.id = "tbody";

  array.forEach((each) => {
    let tr = document.createElement("tr");
    let nametd = document.createElement("td");
    let agetd = document.createElement("td");
    let countrytd = document.createElement("td");
    let votetd = document.createElement("td");

    nametd.innerHTML = each.name;
    agetd.innerHTML = each.age();
    countrytd.innerHTML = each.country;
    votetd.innerHTML = each.vote;

    tr.append(nametd, agetd, countrytd, votetd);
    tbody.append(tr);
  });

  emptyTable();
  document.getElementsByTagName("table")[0].append(tbody);
}

function emptyTable() {
  var parent = document.getElementById("tb");
  var child = document.getElementById("tbody");
  if (child) {
    parent.removeChild(child);
  }
}

function sortPersons(array) {
  array.sort((a, b) => +b.vote - +a.vote);
}

createTable(persons);
