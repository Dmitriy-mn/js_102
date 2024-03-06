// class User {
//   constructor(name, age) {
//     this.userName = name;
//     this.userAge = age;
//   }
// }

// const inst = new User("Alice", 18);

// console.log(inst);

// ********************ES6 Class********************\\

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.userEmail = email
//   }
// }

// const alice = new User("Alice", "alice@gmail.com");

// *****Публічні властивості та методи***** \\
// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     showName() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// const student = new User('Alice');
// console.log(student);
// student.showName()

// *****Приватні властивості та методи***** \\
// class User {
//     #password;
//     constructor(name, password) {
//         this.name = name;
//         this.#password = password;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }
// }

// const student = new User('Alice', 'qwerty111');
// console.log(student);

// student.showName()

// ******Геттери і сеттери****** \\

// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }
//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }

//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }
// const student = new User('Alice', 'qwerty111', 'test@gmail.com');
// // console.log(student.email);
// student.email = 'new@gmail.com';
// console.log(student.email);

// *****Статичні властивості та методи***** \\
// Розглянемо на практичному завдані (Task-3)

// **********Наслідування класів********* \\

// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }

//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }

// class Student extends User {
//     constructor(name, password, email, points) {
//         super(name, password)
//         this.points = points;
//     }
//     getPoints() {
//         console.log(`${this.name} has ${this.points} points`);
//     }
// }

// const student = new Student('Alice', 'qwerty111', 'test@gmail.com', 38);
// console.log(student);
// // student.showName()
// // student.getPoints()
// student.getAge()

// Перерва до 21.05

// *********************** Практика *********************** \\

// *******Task-1****** \\
// Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.

// class Rectangle {
//   #width;
//   #height;
//   constructor({ width, height } = {}) {
//     this.#height = height;
//     this.#width = width;
//   }

//   get height() {
//     return this.#height;
//   }

//   set height(newHeight) {
//     if (typeof newHeight === "number" && newHeight > 0) {
//       this.#height = newHeight;
//       return;
//     }
//     console.error("Висота повина бути числом та більша за нуль");
//   }

//   get width() {
//     return this.#width;
//   }

//   set width(newWidth) {
//     if (typeof newWidth === "number" && newWidth > 0) {
//       this.#width = newWidth;
//       return;
//     }
//     console.error("Ширина повина бути числом та більша за нуль");
//   }
// }

// const item = new Rectangle({ width: 10, height: 5 });
// console.log(item);
// console.log(item.height);
// item.height = -3;
// console.log(item.height);

// console.log(item.width); // get
// item.width = -12; // set
// console.log(item.width); //get

// *******Task-2******* \\
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являється випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2020);

// class User {
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }

//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);

//     this.year = year;
//   }

//   getCourse(){
//     const currentTime = new Date();
//     const currentYear = currentTime.getFullYear();

//     const diff = currentYear - this.year;

//     if(diff > 5) {
//         return 'Студент являється випускником'
//     }

//     return `${diff} курс`
//   }
// }

// const student = new Student("Петрик", "Пяточкин", 2018);
// console.log(student);
// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse()); //поверне 4

// *******Task-3******* \\
// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//   static counter = 0;
//   static addHero() {
//     Hero.counter += 1;
//     console.log(`Кількість створених героїв ${Hero.counter}`);
//   }
//   #level;
//   constructor(name) {
//     this.name = name;
//     this.#level = 1;
//     this.health = 200;
//     Hero.addHero();
//   }

//   attack() {
//     console.log(`Attack with 10 damage`);
//   }

//   heal() {
//     this.health += 10;
//   }
// }

// const bloodseker = new Hero("Bloodseker");
// const bloodseker1 = new Hero("Bloodseker");
// const bloodseker2 = new Hero("Bloodseker");
// const bloodseker3 = new Hero("Bloodseker");
// const bloodseker4 = new Hero("Bloodseker");
// const bloodseker5 = new Hero("Bloodseker");
// // bloodseker.attack();
// // console.log(bloodseker);
// // bloodseker.heal();
// console.log(bloodseker);
// console.log('Counter', Hero.counter);

// const user = {
//   name: "Alice",
//   age: 18,
// };

// const student = Object.create(user);

// console.log(student);
// console.log(student.name);

const user = {
  name: "Alice",
  age: 18,
};

const student = Object.assign({}, user, { city: "Lviv" });

console.log(student);

// "Статичні властивості - властивості, що доступні тільки класові, але не його екземплярам." Тоді не зовсім розумію яким чином в цьому прикладі з конспекту mango достукується до статичної властивості roles і його роль змінюється:
class User {
  static roles = {
    admin: "admin",
    editor: "editor",
    basic: "basic",
  };

  #email;
  #role;
  constructor({ email, role = User.roles.basic }) {
    this.#email = email;
    this.#role = role;
  }
  get role() {
    return this.#role;
  }
  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.roles.admin,
});

console.log(mango.role); // "admin"
mango.role = User.roles.editor;
console.log(mango.role); // "editor"
// За бажанням самостійно виконати

// *******Task-4******* \\
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

// class BankAccount {

// }

// const instance = new BankAccount()
// instance.deposit(100)
// instance.deposit(1200)
// instance.withdraw(1000)
// console.log(instance);

// ДАЙ ЗАВДАННЯ ПО КЛАСАМ!!!!!


// Створіть клас Product з такими властивостями:

// name (назва продукту)
// price (ціна продукту)
// description (опис продукту)
// quantity (кількість продукту)
// Додайте метод до класу Product:

// getPricePerItem(): повертає вартість одиниці товару, розділену на ціну та кількість.
// Створіть підкатегорію Grocery, яка успадковуватиме клас Product і матиме додаткову властивість:

// expiryDate (дата закінчення терміну придатності)
// Додайте метод до класу Grocery:

// isExpired(): повертає true, якщо продукт прострочений на сьогоднішню дату, в іншому випадку повертає false.
// Створіть ще одну підкатегорію Electronic, яка успадковуватиме клас Product і матиме додаткову властивість:

// warrantyPeriod (період гарантії в місяцях)
// Додайте метод до класу Electronic:

// isUnderWarranty(): повертає true, якщо продукт перебуває під гарантією на сьогоднішню дату, в іншому випадку повертає false.
// Додайте ще одну підкатегорію Clothing, яка успадковуватиме клас Product і матиме додаткову властивість:

// size (розмір одягу)
// Додайте метод до класу Clothing:

// getSize(): повертає розмір одягу продукту.




// Приклад ініціалізації екземплярів класів

// const grocery = new Grocery("Молоко", 2.49, "Свіже молоко", 20, "2024-03-10")
// const electronic = new Electronic("Смартфон", 499.99, "Остання модель смартфону", 5, "1 рік")