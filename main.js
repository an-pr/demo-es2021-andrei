/* // Primitive Types
let x = 10
let y = 'JS'
y = "JS (${x})"
// y = `JS (${x})` // interpolation
console.log(typeof x)
console.log(typeof y)
let z = {}
console.log(typeof z)

console.log((x / 3).toFixed(2))

try {
  console.log(a)
  // ---
} catch (error) {
  console.log(error.message)
} finally {
  console.log(x * x)
}

if (x === 0) {
  console.log(x)
} else if (x === 10) {
  console.log(x * x)
} else {
  console.log(x * x * x)
}

switch (x) {
  case 0:
    console.log(x)
    // break
  case 10:
    console.log(x * x)
    // break
  default:
    console.log(x * x * x)
}

console.log(x === 10 ? 'x = 10' : 'x != 10')

MAIN_LOOP : for (let i = 0; i < 3; i++) { // 3
  for (let j = 0; j < 3; j++) { // 9
    process.stdout.write(`i = ${i}, j = ${j}\t`)
    if (i === 1 && j === 1) {
      break MAIN_LOOP
      // j = 3
      // i = 3
    }
  }
  process.stdout.write('\n')
} */

/* while (condition) {
  
} */ 

/* do {

} while (condition) {
  
} */

/* foo() // (3 stage)

function foo() { // function definition (2 stage)
  console.log('Hello World!')
}

foo2() // function call (3 stage)

const foo2 = function () { // expression statement (3 stage)
  console.log('Hello World!')
} */

function parent() {
  // context
  const o = { count: 0 }
  return function () {
    return o.count++
  }
}

const child = parent()
/* console.log(child())
console.log(child())
console.log(child()) */

/* Objects */

// squareFunction(2)
// square(2)

/* const squareFunction = function (x) {
  console.log(x * x, 'from', this, 'scope')
}

const square = (x) => {
  console.log(x * x, 'from', this, 'scope')
}

// squareFunction(2)
square(2) */

// const numbers = [1, -1, 0, 100, 15, -4]
/* numbers.filter(n => n >= 0)
  .map(n => n * n)
  .sort((a, b) => b - a)
  .forEach(n => {
    console.log(n)
  }) */

/* const people = [
  {
    name: 'John',
    age: 31
  },
  {
    name: 'Bill',
    age: 66
  },
  {
    name: 'Mary',
    age: 20
  }
] */

// console.log(numbers.reduce((result, current) => result += current, 0) / numbers.length)

/* console.log(
  people.reduce((result, current) => result += current.age, 0) / people.length
) */


// TODO разработать универсальную функцию сортировки,
// то есть такую, которая может сортировать массив однотипных элементов любого типа,
// такую, как sort,
// только она будет вызываться не на массиве, а сама по себе,
// и принимать как аргументы массив для сортировки и правило сортировки

/* mySort(numbers, (a, b) => b - a).forEach(n => {
  console.log(n)
}) */

// console.log(new Date())

// const regex = /^[a-z0-9]{1,16}@[a-z]{1,16}(\.[a-z]{2,3}){1,2}$/ // tyaa@ukr.net
// myemail2022@mail.in.ua
// console.log(regex.test('myemail2022@mail.in.ru.com'))

/* people.push({
  // name: 'Yurii',
  age: 35
})

people[3].salary = 20000 */

// console.log(people[3])

/* function Person(name, age) {
  if (!new.target) {
    return new Person(name, age)
  }
  this.name = name
  this.age = age
} */

/* class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.toString = function () {
      return this.name
    }
  }
}

people.push(new Person('Yurii', 35))
// people.push(Person('Noname', 30))
console.log(people[3].toString(), ', ' ,people[4]) */

const numbers = [1, -1, 0, 100, 15, -4]

function mySort(array) {
  // предполагаем, что массив не упорядочен
  let isSorted
  do {
    // предполагаем, что массив упорядочен
    isSorted = true
    // цикл однократного перебора всех пар элементов входного массива
    for (let i = 0; i < array.length - 1; i++) {
      const current = array[i]
      const next = array[i + 1]
      // условие сравнения текущего числового элемента массива
      // со следующим для упорядочения по возрастанию
      if (next - current > 0) {
        // если два рядом лежащих элемента - не в желаемом порядке -
        // - меняем их местами
        array[i] = next
        array[i + 1] = current
        // если пришлось ли хотя бы раз поменять два элемента местами,
        // значит до начала текущего выполнения цикла for
        // массив еще не был упорядочен
        isSorted = false
      }
    }
  } while (!isSorted) // после каждого прохода циклом for по массиву
  // проверяем: не пришлось ли хотя бы раз поменять два элемента местами?
  // если пришлось, значит массив еще не отсортирован,
  // цикл do-while нужно выполнить еще раз, то есть выполнить его слудующий шаг
}

mySort(numbers)

console.log(numbers)