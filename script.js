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

function fullTimeClock() {
	const currenTime = new Date();
	let hours = currenTime.getHours();
	if (hours < 10) {
		hours = '0' + hours;
	}
	let minutes = currenTime.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	let seconds = currenTime.getSeconds();
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	header__clock.innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(() => fullTimeClock(), 1000);

console.log('------------- # 5.C')
let fullTime = true;
let clockTimer = ''
function fullTimeClock() {
	const currenTime = new Date();
	let hours = currenTime.getHours();
	if (hours < 10) {
		hours = '0' + hours;
	}
	let minutes = currenTime.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	let seconds = currenTime.getSeconds();
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	if (fullTime) {
		clockTimer = hours + ':' + minutes + ':' + seconds;
	}
	else {
		clockTimer = hours + ':' + minutes
	}
	header__clock.innerHTML = clockTimer
}
setInterval(() => fullTimeClock(), 1000);

header__button.addEventListener('click', () => {
	fullTime = !fullTime
	fullTimeClock()
})