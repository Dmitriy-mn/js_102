/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({ sideB, sideD, sideC, sideA }) {
    console.log("sideB", sideB);
    console.log("sideD", sideD);
    console.log("sideC", sideC);
    console.log("sideA", sideA);

    const perimeter = sideA + sideB + sideC + sideD;
    return perimeter;
}

const house = {
    sideA: 10,
    sideB: 15,
    sideC: 20,
    sideD: 25
}
  
const perimeter = calculateHousePerimeter(house);
console.log(`Периметр будинку: ${perimeter}`);