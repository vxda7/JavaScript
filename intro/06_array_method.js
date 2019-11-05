// let array1 = ['a', 'b', 'c']

// for (let arr of array1) {
//     console.log(arr)
// }


// forEach 활용방법 return이 따로 필요함
// array1.forEach(function (element) {
//     console.log(element)
// })


// let colors = ['red', 'green', 'blue']

// colors.forEach(function (color) {
//     console.log(color)
// })

// colors.forEach(function (color) {
//     console.log(color)
// })

/* 
colors.forEach(function (color, idx, array) {
    console.log(color, idx, array)
})

colors.forEach((color) => {
    console.log(color)
})

colors.forEach(color=>{console.log(color)})

colors.forEach(color => console.log(color)) 
*/

/* function handlePosts() {
    const posts = [{
            id: 50,
            title: "javascript"
        },
        {
            id: 100,
            title: "python"
        },
        {
            id: 123,
            title: "css"
        }
    ]
    // for (let i = 0; i < posts.length; i++){
    //     console.log(posts[i])
    //     console.log(posts[i].id)
    //     console.log(posts[i].title)
    // }
    posts.forEach(post => {
        console.log(post)
        console.log(post.id)
        console.log(post.title)
    })
}

handlePosts()

const images = [{
        height: 10,
        width: 20
    },
    {
        height: 14,
        width: 25
    },
    {
        height: 50,
        width: 15
    }
]

const areas = []
images.forEach(image => {
    areas.push(image.height * image.width)
})
console.log(areas)
 */


// 맵 사용 방법 return을 알아서 해줌
/* 
let numbers = [1, 2, 3 ,4, 5, 6]

const doubleNumbers = numbers.map(x => x * 2)

console.log(doubleNumbers)

// const double = numbers.map(function(number){return number*2})
const double = numbers.map(number => number * 2)
console.log(double)
 */



 // 맵을 활용한 이미지 곱
 /* 
const images = [{
    height: 10,
    width: 20
},
{
    height: 14,
    width: 25
},
{
    height: 50,
    width: 15
}
]

const areas = images.map(image => image.height * image.width)
console.log(areas)
 */


// filter 활용
/* 
const numbers = [1, 2, 3, 4, 5]

const evennumber = numbers.filter(function(number){
    return number % 2 === 0
})
console.log(evennumber)
 */


/* 
const products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'carrot', type: 'vegetable'},
    {name: 'apple', type: 'fruit'}
]

const fruits = products.filter(product => product.type === 'fruit')
console.log(fruits)
 */


// reduce 활용 법 
/* 
const number = [1, 2, 3, 4, 5]
const plus = (a, b) => a+b
console.log(number.reduce(plus))
console.log(number.reduce(plus, 5))


const scores = [100, 80, 88, 92, 95, 70]
const total = scores.reduce((total, score) => total += score, 0)
console.log(total)
 */


// find 활용법
/* 
const users = [
    {name: 'change', location: 'gj'},
    {name: 'justin', location: 'gm'},
    {name: 'tak', location: 'dj'},
    {name: 'junho', location: 'dj'},
    {name: 'neo', location: 'so'},
]

// const user = users.find(function(user){return user.name=='neo'})

const user = users.find(user => user.location === 'dj')
console.log(user)
 */


