// Задача 1

for (let i = 1; i <= 20; i++) {
	if (i % 4 === 0) {
		continue;
	}
	console.log(i);
}

// Задача 2

let number = +prompt("Введите число", 0);
let factorial = 1;

for (let i = 1; i <= number; i++) {
	factorial = factorial * i;
}

console.log(`Факториал числа ${number} равен ${factorial}`);
alert(`Факториал числа ${number} равен ${factorial}`);

// Задача 3

let board = "";

for (let i = 1; i <= 8; i++) {
	if (i % 2 === 0) {
		board += "Ч ";
	} else {
		board += "Б ";
	}

	for (let j = 1; j <= 7; j++) {
		if (i % 2 !== 0) {
			board += "Ч ";
		} else {
			board += "Б ";
		}
	}
	board += "\n";
}

console.log(board);
