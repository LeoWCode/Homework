// Массивы

// Задание 1
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задание 2

const getUserAverageAge = (users) => {
  let sum = 0;
  users.forEach(function (user) {
    sum = sum + user.age;
  });
  return sum / users.length;
};

console.log(getUserAverageAge(users));

// Задание 3

const getAllAdmins = (users) => {
  let admins = [];
  users.forEach(function (user) {
    if (user.isAdmin === true) {
      admins.push(user);
    }
  });
  return admins;
};

const admins = getAllAdmins(users);

console.log(admins);

// Задание 4

const first = (arr, n) => {
  let array = [];
  if (n === 0) {
    return (array = []);
  } else if (n === undefined) {
    return [arr[0]];
  } else if (n > arr.length) {
    console.error(`число n (${n}) не может быть больше длины массива`);
    return;
  }
  arr.forEach(function (user) {
    if (array.length < n) {
      array.push(user);
    }
  });
  return array;
};

console.log(first(users, 3));
