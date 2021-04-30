var person = {
    firstName:"Diogo",
    lastName:"Perestrelo",
    age:32,
    eye:"castanho",
    gender : "M"
};

console.log(JSON.stringify(person));

var person = {firstName:"Diogo", lastName:"Perestrelo", age:32, eye:"castanho", gender : "M"};

console.log(JSON.parse(person));