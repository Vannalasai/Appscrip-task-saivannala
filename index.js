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

const getData = (list) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(list), 1000)
  })
}

getData(list).then(result => console.log(result)).catch(error => console.log(error))