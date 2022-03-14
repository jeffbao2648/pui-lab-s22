function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “An image of a Panda”;
  this.image = “panda.jpg”;
}

function Koala(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “An image of a sleeping Koala;
  this.image = “koala.jpg”;
}

function Lion(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “An image of a Lion”;
  this.image = “lion.jpg”;
}

var panda = new Panda("Hagrid", 2); 
var koala = new Koala("Schleepy", 3); 
var lion = new Lion("Boo", 5);

const animals = [panda, koala, lion];
const names = [panda.name, koala.name, lion.name];

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex); 
}

function generateRandomName() {
  var randomIndex = generateRandomIndex(maxIndex);
  return names[randomIndex];
}

function generateRnadomAge() {
  var randomIndex = generateRandomIndex(maxIndex); 
  return names[randomIndex].age;
}

function generateRandomAnimal() {
  var randomIndex = generateRandomIndex(maxIndex); 
  var randomAnimal = animals[randomIndex];
  var randomName = randomAnimal.name;
  var randomAge = randomAnimal.age;
  if (randomAnimal instanceof Panda) {
    return new Panda(randomName, randomAge);
  } else if (randomAnimal instance of Koala) {
    return new Koala(randomName, randomAge); 
  } else if (randomAnimal instnace of Lion) {
    return new Lion(randomName, randomAge); 
  };
  
}
