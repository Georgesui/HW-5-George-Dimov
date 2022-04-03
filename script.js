// function newQuestion(question, yesCb, noCb) {
// 	const newRequest = confirm(question);
// 	if (newRequest) {
// 		console.log(yesCb())
// 	}
// 	else {
// 		console.log(noCb())
// 	}
// }
// newQuestion(
// 	'Да или нет?',
// 	() => 'Ты сказал да',
// 	() => 'Ты сказал нет'
// )

// function checkAge() {
// 	let age = prompt('Сколько вам лет?')
// 	if (+age === 18) {
// 		return true
// 	}
// 	else {
// 		return false
// 	}
// }
// console.log(checkAge())
console.log('------------- # 4.A')
function countNumbers(a, b) {
	if (a === b) {
		return [a];
	}
	else {
		const newNumbers = countNumbers(a, b - 1);
		newNumbers.push(b);
		return newNumbers
	}
}
console.log(countNumbers(1, 5))

console.log('------------- # 4.B')
function secondCountNumbers(a, b) {
	if (a < b) {
		if (a === b) {
			return [a]
		}
		else {
			const firstNumbers = secondCountNumbers(a, b - 1);
			firstNumbers.push(b)
			return firstNumbers
		}
	}
	else {
		if (a === b) {
			return [a]
		}
		else {
			const secondNumbers = secondCountNumbers(a, b + 1);
			secondNumbers.push(b)
			return secondNumbers
		}
	}
}
console.log(secondCountNumbers(8, 4))

console.log('------------- # 5.A,B')

// setInterval(() => {
// 	let currentTime = new Date();
// 	let currentClock = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds()
// 	console.log(currentClock)
// }, 1000);

// console.log('------------- # 5.C')
// setInterval(() => {
// 	let currentTime = new Date();
// 	let currentClock = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();

// }, 1000);
