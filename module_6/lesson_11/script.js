
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та decrease, властивостями speed та brand.


// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log('Авто запинилось');
//             return;
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }


// cruiseControl.accelerate()
// cruiseControl.accelerate()

// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()

// console.log(cruiseControl);





// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this


// const SAFE_SPEED = 60;

// const tesla = {
//     brand: "tesla",
//     speed: 30
// }

// const bmw = {
//     brand: "BMW",
//     speed: 70
// }

// function speedSensor(maxSpeed) {
//     // if(this.speed <= maxSpeed) {
//     //     return `автомобіль ${this.brand} рухаєтсяь з безпечною швидкістю`;
//     // }

//     // return `${this.brand} - Перевищено швидкість`;

//     return this.speed <= maxSpeed ? 
//     `автомобіль ${this.brand} рухаєтсяь з безпечною швидкістю` :
//     `${this.brand} - Перевищено швидкість`;
// }

// console.log(speedSensor.call(tesla, SAFE_SPEED));
// console.log(speedSensor.call(bmw, SAFE_SPEED));


