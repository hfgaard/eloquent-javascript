var ancestry = require("./ancestry");

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function hasKnownMother(person) {
  return byName[person.mother] != null;
}

var ageDifference = ancestry.filter(hasKnownMother).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(ageDifference));
