/**
 * Деструктуризація об'єкта
 */

// const city = "Lviv";

// const user = {
//     userName: "Kate",
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     },
//     city: "Kyiv",
//     age: 30
// }

// const { userName, skills, ...obj } = user;

// console.log(userName);
// console.log(skills);
// console.log(obj);




/**
 * Глибока деструктуризація об'єкта
 */

// const react = "hello";

// const user = {
//     userName: "Kate",
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// const { skills: { css, html, js,  react: lalala = true } } = user;

// console.log(html);




  
/**
 * Деструктуризація масива
 */
  
// const arr = [1, 2, 3, 4, 5];

// const [first, , second, , ,third = 9] = arr;

// console.log(first);
// console.log(second);
// console.log(third);


// const [first, second, ...newArr] = arr;

// console.log(first);
// console.log(second);
// console.log(newArr);

