// 10. what is the difference between == and ===?
console.log(10 == "10"); // hre considrd only value
console.log(10 === "10"); // consider comparision for value and data type

// 11. what is the differenc between null and undefined?

let a = null;
console.log(a);
console.log(typeof a); //object

let b;
console.log(b);
console.log(typeof b); //undefined

//12  involves using array mthod (filter,map and reduce), and javascript ?
// a. Filters out students who pass the exam with score more than 36
// b. update passed status names to uppercase
// c. total score of all passing students

const studArray = [
  { name: "Arun", score: 46 },
  { name: "Raj", score: 23 },
  { name: "Ruthvik Kumar", score: 37 },
  { name: "M Arun", score: 34 },
  { name: "Kumar", score: 80 },
];

// filter mthod used populated data with condition
const passstudenets = studArray.filter((student) => student.score >= 36);
console.log(passstudenets);

// map method usd to access and apply modifications on data
const nameUpper = passstudenets.map((students) => students.name.toUpperCase());
console.log(nameUpper);

// reduce

let TotalScoreOfPassStuds = passstudenets.reduce(function (t, s) {
  t = t + s.score;
  return t;
}, 0);

console.log("Total Scor of PAssed Stduents : " + TotalScoreOfPassStuds);
