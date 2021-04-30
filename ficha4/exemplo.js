function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

Person.prototype.greet = function(){
    console.log(" Hello " + this.firstName + " " + this.lastName);
}

var jhon = new Person ("John", "Doe");
jhon.greet();

var jane = new Person ("jane", "Doe");
jane.greet();

console.log(jhon.__proto__);
console.log(jane.__proto__);
console.log(jhon.__proto__ == jane.__proto__);
