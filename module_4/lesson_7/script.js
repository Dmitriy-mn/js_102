// -------------------------------- 5

/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "html",
//     premium: true,
// };

// const user1 = {
//     name: "Petya",
//     age: 30,
//     hobby: "lalala",
//     premium: true,
// };


// function foo(user) {
//     user.mood = "happy";
//     user.hobby = "skydiving";
//     user.premium = false;
    
//     const keys = Object.keys(user);
    
//     for(const key of keys) { 
//         console.log(`${key}: ${user[key]}`);
//     }
// }

// foo(user);
// foo(user1);

// console.log(user);









/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// const salaries1 = {
//     John: 1000,
//     Ann: 1600,
//     Pete: 1300
// };


// function summa(obj) {
//     let sum = 0;
//     const values = Object.values(obj);
    
//     for(const item of values) {
//         sum += item
//     }
//     return sum;
// }


// console.log(summa(salaries));
// console.log(summa(salaries1));



