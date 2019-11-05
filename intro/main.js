// alert("Welcom to JavaScript!")
// alert 경고창이 뜬다아.
/*
C언어 주석
*/

document.write('<h1>hello world</h1>')

//  in: document.querySelector('h1')
// out: <h1>​hello world​</h1>​
// h1태그 가져와!

// document.querySelector('h1').innerText
// "hello world"
// h1태그안에 텍스트 가져와~

// document.querySelector('h1').innerText = "bye"
// "bye"
// 화면이 바뀌지만 서버데이터는 그대로인 임시조작

// var name = "vxda77"
// console.log(name)

// var b = 30
// for (var b = 0; b < 10; b++){
//     console.log(b)
// }
// console.log('!!!!!!!!!!!!')
// console.log(b)


// 재할당 가능
// let name = 'vxda77'
// document.write(name)
// name = "changhee"
// document.write(name)

// 재할당 불가능
// const loca = 'ssafy'
// document.write(loca)
// loca = 'Seoul'
// document.write(loca)


const first_name = "seungyeon"
const last_name = "kim"

const full_name = last_name + first_name 
document.write('<h1>' + full_name + '</h1>')
document.write(`<h1>${full_name}</h1>`)
console.log(`<h1>${full_name}</h1>`)

const userName = prompt("hello who are you?")
let message = `<h1>hello! ${userName}</h1>`


if (userName === 'admin') {
    message = `<h1>admin page</h1>`
}
else if (userName === 'happy') {
    meesage = `<h1>happy coding</h1>`
}
else{
    message = `<h1>hello! ${userName}</h1>`
}
document.write(message)



const user = "1"
let num = 1

// true 간단한비교(값비교)
console.log(user == num)
// false 엄격한비교(타입까지)
console.log(user === num)

