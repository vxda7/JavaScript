/* // 함수 선언식
function add(num1, num2) {
    return num1 + num2
}
console.log(add(2,10))

// 함수 표현식
const sub = function(num1, num2){
    return num1 - num2
}
console.log(sub(10, 2))


// 표현식
const ssafy1 = function(name){
    console.log(`hello ${name}`)
}
ssafy1("hi")


// 화살표 함수, arrow function
const ssafy2 = (name) => {
    console.log(`hello ${name}`)
}
ssafy2("yo")


// 화살표 함수 소괄호 생략, 단 매개변수가 하나일 때
const ssafy3 = name => {
    console.log(`hello ${name}`)
}
ssafy3('wow')

// 화살표 함수 중괄호 생략, 표현식 하나일 때
const ssafy4 = name => `hello ${name}`
console.log(ssafy4('wowaaaaaa'))
 */

// let square = function(num){
//     return num ** 2
// }

/* let square1 = (num) => {
    return num ** 2
}

let square2 = num => {
    return num ** 2
}

let square = num => num**2
console.log(square(5))
 */

//  let noArgs = () => 'no args'
// console.log(noArgs())

// const a = {}
// console.log(typeof a)

// let returnObject = () => ({key: 'value'})

// const hello = (name="noName") => `hello ${name}`
// console.log(hello())


//익명함수
(function (name) {
    console.log(name)
})('change')



