// Задача 1

const number = 5;

if (number % 2 === 0) {
	console.log("Четное число");
} else {
	console.log("Нечетное число");
}

// Задача 2

const age = 67;

// prettier-ignore
const discount = age > 0 && age < 18 ? "скидка 10%" 
: age >= 18 && age <= 65 ? "скидка 20%"
: age > 65 ? "скидка 30%"
: "Что-то пошло не так";
console.log(discount);

// *Дополнительное задание

const YoungMan = age > 0 && age < 18; // ребёнок
const AdultMan = age >= 18 && age <= 65; // взрослый
const OldMan = age > 65; // пожилой

switch (true) {
	case YoungMan:
		console.log("скидка 10%");
		break;
	case AdultMan:
		console.log("скидка 20%");
		break;
	case OldMan:
		console.log("скидка 30%");
		break;
	default:
		console.log("Что-то пошло не так");
}

// Задача 3

const username = prompt("Введите Имя пользователя", "");
const password = +prompt("Введите пароль", 0);

if (username === "admin" && password === 123456) {
	console.log("Доступ разрешен");
	alert("Доступ разрешен");
} else if (username === "user" && password === 123456) {
	console.log("Доступ разрешен");
	alert("Доступ разрешен");
} else {
	console.log("Доступ запрещен");
	alert("Доступ запрещен");
}

// Задача 4

const weight = +prompt("Введите вес посылки в кг", "кг");
const delivery = prompt("Введите тип доставки", "");

if (weight <= 0) {
	console.log("Некорректный вес посылки");
	alert("Некорректный вес посылки");
} else if (
	delivery !== "стандарт" &&
	delivery !== "экспресс" &&
	delivery !== "премиум"
) {
	console.log("Неверный тип доставки");
	alert("Неверный тип доставки");
} else {

//3.

let baseCost;

if (weight < 1 && weight > 0) {
	baseCost = 5;
} else if (weight >= 1 && weight <= 5) {
	baseCost = 10;
} else if (weight > 5) {
	baseCost = 15;
}
console.log(baseCost + "$ Базовая стоимость");

//4.

let coefficient;

switch (delivery) {
	case "стандарт":
		coefficient = 1;
		break;
	case "экспресс":
		coefficient = 1.5;
		break;
	case "премиум":
		coefficient = 2;
		break;
}
console.log(coefficient + " Коэффициент");

//5

const totalCost = baseCost * coefficient;

// 6.
alert("Итоговая стоимость доставки: " + totalCost + "$.");
console.log("Итоговая стоимость доставки: " + totalCost + "$.");
}
