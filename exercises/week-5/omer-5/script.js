function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
}

Pokemon.prototype.attack = function (attackNumber) {
  console.log(`Pokemon ${this.name} used ${this.attackList[attackNumber]}`);
}

Pokemon.prototype.randomAttackNumber = function () {
  return Math.floor(Math.random() * this.attackList.length);
}

const pokemon1 = new Pokemon(
  "Vasiliy",
  "Fire",
  ["Fireball", "Blast"]
);

const pokemon2 = new Pokemon(
  "Marina",
  "Earth",
  ["Earthquake", "Tornado"]
);

const pokemon3 = new Pokemon(
  "Omer",
  "Matrix",
  ["ECMA5", "ECMA2015", "ECMA2016", "ECMA2017", "ECMA2018", "ECMA2019", "ECMA2020", "ECMA2021", "ECMA2022", "ECMA2023", "ECMA2024"]
);

pokemon1.callPokemon();
pokemon1.attack(pokemon1.randomAttackNumber());
pokemon2.callPokemon();
pokemon2.attack(pokemon2.randomAttackNumber());
pokemon3.callPokemon();
pokemon3.attack(pokemon3.randomAttackNumber());
