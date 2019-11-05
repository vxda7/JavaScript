// 원본 교체형들
const numbers = [1, 2, 3, 4]

console.log(numbers[2])
console.log(numbers.length)

console.log(numbers.reverse())
console.log(numbers)

numbers.push(5)
console.log(numbers)
console.log(numbers.pop())
console.log(numbers)


numbers.unshift(6)
console.log(numbers)

console.log(numbers.shift())
console.log(numbers)

// 원본 유지
console.log(numbers.includes(100))
console.log(numbers.indexOf(4))

console.log(numbers.join())
console.log(numbers)