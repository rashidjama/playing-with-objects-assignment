// Imagine that you are given an array of objects.  For example,

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
// How would you print/log John's age?
let johnsAge = users[1].age;
// console.log(johnsAge)

// How would you print/log the name of the first object?
let nameFirstObj = users[0].name;
// console.log(nameFirstObj)

// How would you print/log the name and age of each user using a for loop?  Your output should look something like this
for(let i=0;i<users.length;i++) {
  console.log(`${users[i].name} - ${users[i].age}`)
}
// Michael - 37
// John - 30
// David - 27
