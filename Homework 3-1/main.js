//   (1)

const firstName = "Леонид";
const lastName = " Савченко";
const isStudent = true;

//  (2)

const age = 24;
const currentYear = 2026;
const birthYear = currentYear - age;

console.log(birthYear);

//  (3)

console.log(
	"Меня зовут " +
		firstName +
		lastName +
		", мне " +
		age +
		" года. Я ученик курса: " +
		isStudent +
		".",
);

console.log(
	`Меня зовут ${firstName} ${lastName},
     мне ${age} года.
     Я ученик курса: ${isStudent}.`,
);

//  (4)

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;

console.log(result);
123456789falsetrue

console.log(typeof result);

// Если при использовании оператора + хотя бы один из участников сложения является строкой, то JavaScript превращает операцию из "математического сложения" в "склеивание строк" (конкатенацию). Все остальные типы данных (числа, булевы значения) при этом тоже превращаются в текст.
