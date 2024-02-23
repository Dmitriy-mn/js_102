
            // 0               1        2               3              4        5       
// const arr = ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const uniqueCourses = arr.filter(
//     (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);




/**
 * -------------------------------------
 */
// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];

/**
 * Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */

// const getAvailableCarNames = (array) => {
//     return array
//         .filter(item => item.onSale)
//         .map(item => item.model)
// }

// console.log(getAvailableCarNames(allCars))





/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */

          
// const getSortedCarsOnSale = (arr) => {
//     return arr
//         .filter(item => item.onSale)
//         .toSorted((a, b) => a.price - b.price)
// }

// console.table(getSortedCarsOnSale(allCars));



