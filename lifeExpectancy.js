var ancestry = require("./ancestry");

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var centuries = {};
ancestry.forEach(function(person) {
  var century = Math.ceil(person.died / 100);
  if (century in centuries) {
    centuries[century].push(person.died - person.born);
  } else {
    centuries[century] = [person.died - person.born];
  }
});

for (century in centuries) {
  console.log(century + ': ' + average(centuries[century]));
}
