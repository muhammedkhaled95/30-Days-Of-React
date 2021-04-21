/*create an empty object called dog*/
const dog = {};
console.log(dog);
dog.name = "gilfoyle";
dog.age = 5;
dog.legs = 2;
dog.color = "white";
dog.bark = function (){
  return "woof woof";
}
/*getting the object dog properties*/
console.log(dog.name);
console.log(dog.age);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark());

/*setting new properties for dog object (breed, and getDogInfo)*/
dog.breed = "Black Jack";
dog.getDogInfo = function(){
  /*using string template literals*/
  return `this dog is ${this.breed} breed, he is ${this.age} years old,
  his color is ${this.color}, and his name is ${this.name}.`;
}

console.log(dog.getDogInfo());

/*getting the values of the dog object returned in an array using values() method*/
const values = Object.values(dog);
console.log(values);
/*getting the keys of the dog object returned in an array using keys() method*/
const keys = Object.keys(dog);
console.log(keys);
/*getting the entries of the dog object returned in an array using entries() method*/
const entries = Object.entries(dog);
console.log(entries);
