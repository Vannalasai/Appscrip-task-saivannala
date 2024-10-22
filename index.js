console.log("web pages")

async function Function(){
  return 1;
}
console.log(Function())

const list = [1, 2, 3, 4, 5];

const some = list.some(num => num % 2 === 0)

console.log(some)

const every = list.every(num => num % 2 === 0)

console.log(every)

const addFirstElement = list.unshift(0)
console.log(addFirstElement)
console.log(list)

const removeFirstElement = list.shift()
console.log(removeFirstElement)
console.log(list)

const addLastElement = list.push(6)
console.log(addLastElement)
console.log(list)

const removeLastElement = list.pop(6)
console.log(removeLastElement)
console.log(list)

setTimeout(() => {
  console.log(list)
},2000)

//promise in asynchronous function

const getData = (list) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(list), 1000)
  })
}

getData(list).then(result => console.log(result)).catch(error => console.log(error))

//Curring Function

function multiply(a) {
  return function (b) {
      return a * b;
  }
}

const doubled = multiply(2);
console.log(doubled(3))

function mutiple(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    }
  }
}

const triple = mutiple(2)
const single = triple(3)
console.log(single(4))

// function sayHi() {

//   console.log(name)
//   console.log(age)
//   var name = "sai";
//   let age = 24;
// }

// sayHi();

const obj = [
  {name: "Sai", age: 24},
  {name: "Deepu", age: 16},
  {name: "jonny", age: 21},
  {name: "lilly", age: 28},
  {name: "prabhas", age: 45},
  {name: "Sai", age: 24},
  {name: "prabhas", age: 45},
  {name: "Deepu", age: 16},
  {name: "Navvu", age: 21}
]

const nameCount = {};

obj.forEach((item) =>{
  if(item.age >= 18){
    if(nameCount[item.age]){
      nameCount[item.age]++;
    } else {
      nameCount[item.age] = 1;
    }
  }
})

console.log(nameCount)