// Задача 1

const calculateFinalPrice = function (basePrice, discount, tax) {
	return (
		(basePrice - basePrice * (discount / 100)) * tax +
		(basePrice - basePrice * (discount / 100))
	);
};

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

// Задача 2

const checkAccess = function (user, password) {
	if (user === "admin" && password === "123456") {
		return "Доступ разрешен";
	} else {
		return "Доступ запрещен";
	}
};

console.log(checkAccess("admin", "123456"));

//Задача 3

const getTimeOfDay = function (time) {
	if (time >= 0 && time <= 5) {
		return "Ночь";
	} else if (time >= 6 && time <= 11) {
		return "Утро";
	} else if (time >= 12 && time <= 17) {
		return "День";
	} else if (time >= 18 && time <= 23) {
		return "Вечер";
	} else {
		return "Некорректное время";
	}
};

console.log(getTimeOfDay(8));

//Задача 4

const findFirstEven = function (start, end) {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return i;
		}
	}
	return "Чётных чисел нет";
};

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));
console.log(findFirstEven(8, 8));
