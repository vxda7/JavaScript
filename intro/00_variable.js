// let 키워드는 같은이름의 변수를 한번만 선언 가능 할당은 여러번 가능
// let x = 1
// // let x = 2
// x = 3
// console.log(x)

// block scope 블록 유효범위    지역변수는 내부에서만 살아남음
// let x = 1
// if (x === 1) {
//     let x = 2
//     console.log(x)
// }
// console.log(x)



// 똑같은 변수명을 지어주어도 덮어쓰기가 되진 않는다.
/* let x
const y = 3.141592
if (y === 3.141592){
    let y = 20
    console.log(y)
}
console.log(y)
console.log(x) */


// var 의 유효범위 함수 밖 x는 error
/* function varTest() {
  var x = 1
  if (true) {
    var x = 2
    console.log(x)
  }
  console.log(x)
}

varTest()
console.log(x) */

// var : 선언, 할당 => 자유 / 함수 스코프
// let : 할당 => 자유 / 선언 => 한번만 / 블록 스코프
// const : 할당, 선언 => 한번만 / 블록 스코프

/* let dog
let varialbeName
let dogs = []

function getName(){
} */

// 보통은 onClick 처럼 앞에 on이 붙음
// const onClick


// true / flase 를 갖는 변수는 is 를 주로 붙여줌
// let isValid = false

// class첫글자는 대문자로!
/* class User {
  constructor(value){
    this.name = value.name
  }
} */

// 상수 표현
/* const API_KEY = "asdff:123980124"

const a = 13
const b = -5
const c = 3.14
const d = 2.9e8
const e = Infinity
const f = -Infinity
const g = NaN
console.log(Math.sqrt(-2))
console.log(a, b, c, d, e, typeof(e), f, typeof(g), g)
console.log("100"*"10")

const sentence1 = 'hello\n'
const sentence2 = "hello"
const sentence3 = `helloworld${sentence2}`

console.log(sentence1 + sentence2 + sentence3)


const isValid = true // flase // javascript는 소문자!\ */


// undefined 와 null 의 관계
/* let first_name
console.log(typeof first_name)

let last_name = null
console.log(typeof last_name)


console.log(null == first_name, null === first_name)

console.log(undefined + 1) */


