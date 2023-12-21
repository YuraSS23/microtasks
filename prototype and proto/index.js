console.log (({}).prototype === ({}).__proto__)
function ITKamasutra() {}
console.log (ITKamasutra.prototype === ITKamasutra.__proto__)
function ITIncubator() {}
console.log (ITIncubator.__proto__ === ITKamasutra.__proto__)
console.log (ITIncubator.prototype === ITKamasutra.prototype)
let Component = (props) => {
    return `<div>I don't know Prototype</div>`
}
console.log (Component.prototype === Object.prototype)
let age = 18
console.log (age.prototype === Number.prototype)
console.log (age.__proto__ === Number.prototype)
class Hacker {}
console.log (Hacker.__proto__ === Function.prototype)
console.log (ITIncubator.__proto__)
console.log (age.__proto__)

let man = {1: 1}
let man2 = {2: 2}
console.log(man.__proto__ === man2.__proto__)