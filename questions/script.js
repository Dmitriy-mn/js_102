// const arr1 = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Mary', city: "Dnipro" },
//     { id: 3, name: 'Bob' },
// ];

// const arr2 = [
//     { id: 2, name: 'Marusya', age: 30 },
//     { id: 4, name: 'Jane' },
//     { id: 5, name: 'Tom' },
// ];

// function foo(array1, array2) {
//     const res = [...array1];

//     array2.forEach(item => {
//         if(!res.some(el => el.id === item.id)) {
//             res.push(item)
//         }
//     })
//     return res;
// }


// function foo(array1, array2) {
//     const res = [...array1];

//     array2.forEach(item => {
//         const index = res.findIndex(el => el.id === item.id);

//         if(index === -1) {
//             res.push(item)
//         } else {
//             // res.splice(index, 1, item)
//             res.splice(index, 1, {...res[index], ...item})
//         }
//     })

//     return res;
// }

// console.log(foo(arr1, arr2));


// --------------------------------

// const wordsArray = ['apple', 'banana', 'orange', 'grape'];
// const str = ["a", "e", "i", "o", "u"];


// const res = wordsArray.reduce((acc, item) => {
//     return acc + item.toLowerCase()
//                     .split("") // a p p l e
//                     .reduce((acc, element) => {
//                         if(str.includes(element)) {
//                             return acc + 1;
//                         }
//                         return acc;
//                     }, 0)
// }, 0)

// console.log(res);




// -------------------------
// const stringsArray = ['apple', '15', '-7', 'banana', '5', 'orange', '42'];


// function foo(arr) {
//     let total = 0;

//     arr.forEach(item => {
//         const numberItem = parseInt(item);

//         if(numberItem) {
//             if(numberItem >= 0) {
//                 total += numberItem
//             } else {
//                 total += numberItem * -1
//             }
//         }
//     })
//     return total;
// }

// console.log(foo(stringsArray));


// const sum = stringsArray.reduce((acc, item) => {
//     const numberItem = parseInt(item);

//     if(numberItem) {
//         if(numberItem >= 0) {
//             return acc + numberItem
//         } else {
//             return acc + numberItem * -1
//         }
//     } else {
//         return acc
//     }

// }, 0)
// console.log(sum);

