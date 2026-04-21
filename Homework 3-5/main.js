// Задача 1

const person = {
	age: 24,
	name: "Leonid",
	surname: "Savchenko",
	gender: "male",
};

console.log("age: ", person.age);
console.log("name: ", person.name);
console.log("surname: ", person.surname);
console.log("gender: ", person.gender);

// Задача 2
const object = {
	test: 1,
	second: 2,
};

function isEmpty(object) {
	for (const key in object) {
		return false;
	}
	return true;
}

console.log(isEmpty(object));

// Задача 3

const task = {
	title: "homework",
	description: "objects, for in, spread",
	isCompleted: "false",
};

const modifications = { isCompleted: "true" };

const cloneAndModify = function (object, modifications) {
	const NewObject = { ...object, ...modifications };
	return NewObject;
};

const NewObject = cloneAndModify(task, modifications);

for (const key in NewObject) {
	console.log(`${key}:`, NewObject[key]);
}

// Задача 4

const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};

const callAllMethods = (object) => {
	for (const ObjKey in object) {
		if (typeof object[ObjKey] === "function") {
			object[ObjKey]();
		}
	}
};

callAllMethods(myObject);
