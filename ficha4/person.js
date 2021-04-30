class person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 0;
        this.greet = function(){
            return this.firstName + " " + this.lastName;
        };
    };
};

person.prototype.greet = function(){
    console.log("Hello " + this.firstName + " " + this.lastName + "age: " + this.age);
}

person.prototype.age = null;


var diogo = new person ("diogo", "perestrelo");
diogo.age = 18;
diogo.greet();

var maria = new person ("maria", "joao");
maria.age = 34;
maria.greet();

console.log(diogo.__proto__);
console.log(maria.__proto__);
console.log(diogo.__proto__ == maria.__proto__);