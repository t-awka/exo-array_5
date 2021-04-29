// exo 1
let x;
let tabExo = ["oui", 1, 2, x, true];
console.log(tabExo);
// exo 2
console.log(tabExo.length);
// exo 3
tabExo.pop();
console.log(tabExo);
// exo 4
// tabExo.splice(0, 1)
tabExo.shift();
console.log(tabExo);
// exo 5
tabExo.push("dank", "meme");
console.log(tabExo);
// exo 6
tabExo.unshift("un", "deux", "trois");
console.log(tabExo);
// exo 7
tabExo.reverse();
console.log(tabExo);
//  exo 8
let boite = [];
boite.push("premier objet");
boite.push("second objet");
alert(boite);
boite.unshift("troisieme objet");
alert(boite);
boite.unshift("obj4", "obj5", "obj6");
alert(boite);
boite.splice(-3);
alert(boite);
boite.push("obj7");
alert(boite.length);
boite.splice(0, 2);
boite.splice(-2);
alert(boite);