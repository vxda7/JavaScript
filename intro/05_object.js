const me = {
    name: 'change',
    'phone number': '123123123',
    product: {
        phone: 'iphone',
        notebook: 'mac',
    }
}
// console.log(me.product.notebook)
// console.log(me['phone number'])

// let books = ['javascript', 'python']
// let comics = {
//     DC: ['Aquaman', 'SuperMan'],
//     Marvle: ['Avengers', 'IronMan'],
// }

// let bookStore = {
//     books,
//     comics,
// }
// console.log(bookStore)


// JSON - python serialization 같이 JSON으로 바꿔줌
const jsonData = JSON.stringify(me)
console.log(me)
console.log(jsonData)


const parseData = JSON.parse(jsonData)
console.log(parseData)