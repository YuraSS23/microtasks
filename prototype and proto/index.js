console.log (({}).prototype === ({}).__proto__) // false
function ITKamasutra() {}
console.log (ITKamasutra.prototype === ITKamasutra.__proto__) //false
function ITIncubator() {}
console.log (ITIncubator.__proto__ === ITKamasutra.__proto__) //true
console.log (ITIncubator.prototype === ITKamasutra.prototype) //false
let Component = (props) => {
    return `<div>I don't know Prototype</div>`
}
console.log (Component.prototype === Object.prototype) //false
let age = 18 //new Number(...) also string, boolean, function
console.log (age.prototype === Number.prototype) //false
console.log (age.__proto__ === Number.prototype) //true
class Hacker {}
console.log (Hacker.__proto__ === Function.prototype) // true
console.log (ITIncubator.__proto__) // Function.prototype
const count = 12
console.log (count.__proto__) // Number.prototype

let man = {1: 1} //new Object(...)
let man2 = {2: 2}
console.log(man.__proto__ === man2.__proto__)

let man3 = [1, 1] //new Array(...)
let man4 = [2, 2]
console.log(man3.__proto__ === man4.__proto__)

console.log(man.__proto__ === man3.__proto__)

class Samurai {}
function Component2() {}
const API = function() {}

console.log(Samurai.prototype)
console.log(Component2.prototype)
console.log(API.prototype)

console.log(Object.prototype)
console.log(Promise.prototype)
console.log(Function.prototype)
console.log(Boolean.prototype)
console.log(Number.prototype)
console.log(String.prototype)
console.log(Array.prototype)

/*
1. У любого объекта есть св-во __proto__
2. Чтобы понимать, что это за __proto__, нужно ТОЧНО знать с помощью какойфункции-конструктора (класса)
 создан данный объект (new ХХХ() )
3. prototype есть только у class либо function (только у функций объявленных через function)
    например у class Channel {} - prototype Function
    если let chanel1 = new Channel () - prototype Channel
4. __proto__ любого объекта ссылается на prototype класса (функции-конструктора), с помощью которой этот объет
был создан (сконструирован)
*/

let dimych = {name: "Dimych"}
console.log(dimych.prototype) //undefined
console.log(dimych.__proto__) // Object.prototype
let numbers = [1,2,3,34]
console.log(numbers.prototype) //undefined
console.log(dimych.__proto__) // Array.prototype
class Samurai2 {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log(this.name)
    }
}
console.log(Samurai2.prototype) // есть прототип
console.log(dimych.__proto__) // Function.prototype

let shogun = new Samurai("Dimych")
console.log(shogun.prototype) // нет прототипа
console.log(dimych.__proto__) // Samurai.prototype

let shogun1 = new Samurai("Dimych")
let shogun2 = new Samurai("Viktor")
console.log(shogun1.__proto__ === shogun2.__proto__) // true

let Component3 = (props) => {
    return `<div>I don't know Prototype</div>`
}
console.log (Component3.prototype) // нет прототипа
console.log (Component3.__proto__) // Function.prototype


let dimych2 = {name: "Dimych"}
console.log(dimych2.toString())
// dimych2.__proto__ => Object.prototype = {  toString() {}   }

function Samurai3(name) {
    this.name = name
}
Samurai3.prototype.hello = function () {
    console.log(this.name)
}
let shogun3 = new Samurai3("Dimych")
shogun3.hello() // shogun3.__proto__ => Samurai3.prototype, и там находит hello
let shogun4 = new Samurai3("Viktor")
shogun4.hello() // shogun4.__proto__ => Samurai3.prototype, и там находит hello


//object.prototype
//function prototype
