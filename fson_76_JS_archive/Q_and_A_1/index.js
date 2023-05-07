console.log('Executing index.js script...');

// function numberGenerator() {
//     // Local “free” variable that ends up within the closure
//     var num = 1;
//     function checkNumber() { 
//       console.log(num);
//     }
//     num = num + 1;
//     return checkNumber;
// }
  
// var number = numberGenerator();
// number(); // 2
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Tom", "apple pie");
// makeDish("Poly", "muffins");

// // code below
// const makeShef = (shefName) => {
//     function makeDishFunc(dish) {
//         console.log(`${shefName} is cooking ${dish}`);
//     }
//     return makeDishFunc;
// }

// // 1. Jake -> shefName
// // 2. Оголошення функції makeDishFunc, яка приймає параметр dish (страву)
// // І яка виводить імя шефа та назву страви.
// // 3. Імя шефа взялось як аргумент функціх makeShef.
// // 4. Повертаємо makeDishFunc, в якій вже є імя шефа і яка очікує на параметр назви страви.

// // code for check
// const tom = makeShef("Tom");
// tom("apple pie"); // Tom is cooking apple pie
// tom("beef stew"); // Tom is cooking beef stew

// const poly = makeShef("Poly");
// poly("pancakes"); // Poly is cooking pancakes
// poly("eggs and bacon"); // Poly is cooking eggs and bacon


// 1. calcSumm(a = 2, b = 3). // 2 * крок2.
// 2. calcSumm(a = 2, b = 2). // 2 * крок3.
// 3. calcSumm(a = 2, b = 1) // 2
// 2 * 2 * 2 = 8

// Рекурсія - це коли функція викликає саму себе.
// Ітеративна функція - функція яка виконується певну кількість разів.

// const calcSumm = (a, b) => {
//     if (b === 1) {
//         return a;
//     } else {
//         return a * calcSumm(a, b - 1);
//     }
// };

// console.log(calcSumm(2, 3)); // 8
// calcSumm(2, 3) -> 2 * calcSumm(2, 3 - 1)
// calcSumm(2, 2) -> 2 * calcSumm(2, 2 - 1)
// calcSumm(2, 1) -> 2

// [[1, 2], [3, 4]];


// const accountantBook = [
//     {
//         cash: 100
//     },
//     {
//         cash: 100
//     },
//     {
//         cash: [
//             {
//                 cash: 100  
//             },
//             {
//                 cash: [
//                     {
//                         cash: 100 
//                     }
//                 ]  
//             },
//         ]
//     },
//     {
//         cash: 100
//     },
//     {
//         cash: 100
//     },
// ];

// const calcSumm = (a, b) => {
//     if (b === 1) {
//         return a;
//     } else {
//         return a * calcSumm(a, b - 1);
//     }
// };

// console.log(calcSumm(2, 3));
// (a = 2, b = 3) // 1. a * calcSumm(a, b - 1); // 2 * calcSumm(2, 2);
// (a = 2, b = 2) // 2. a * calcSumm(a, b - 1); // 2 * calcSumm(2, 1);
// (a = 2, b = 1) // 3. 2

// (2 * 2) * 2 // 8
// 


// Напиши клас Notes який управляє колекцією нотаток у
// властивості items.
// Нотатка це об'єкт із властивостями: text, priority

// Додай класу статичну властивість: Priopity,
// У якому зберігатиметься об'єкт із пріоритетами.
/*
    {
      HIGHT: "hight",
      LOW: "low",
    }
*/

// Додай методи:
//   addNote(note),
//   removeNote(text)
//   updatePriority(text, newPriority)

// code below
// class Notes {
//     static priorities = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     }

//     constructor(items) {
//         this.items = items;
//     }

//     addNote(note) {
//         this.items.push(note);
//     }

//     removeNote(text) {
//         this.items = this.items.filter((existingItem) => {
//             return text !== existingItem.text;
//         });
//     }

//     updateNote(text, newPriority) {
//         const foundNote = this.items.find((existingItem) => existingItem.text === text);
//         foundNote.priority = newPriority;
//     }
// }

// const myNotes1 = new Notes();
  
  
//   // code for check
// //  const myNotes = new Notes([]);
// //  const test = new Notes([]);
// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.priorities.LOW });
// console.log(myNotes.items);
// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.priorities.NORMAL,
// });
// console.log(myNotes.items);
// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);
// myNotes.updateNote('Моя друга замітка', Notes.priorities.HIGH);
// console.log(myNotes.items);

// const test = {
//     name: 'Jake',
//     getName: function() {
//         return this.name;
//     }
// }

// function getName() {
//     return 'some-name';
// }

// [1, 2, 3].forEach()
// [5, 10].forEach()






// !!!!!!!!!!!!!!!!!! //
// function testFunc(arr) {
//     let sum = 0;
//     function addToSum(number) {
//         console.log({ sum, number });
//         sum+=number;
//     }
//     function goThroughItem(itemArr) {
//         itemArr.forEach((item) => {
//             if (Array.isArray(item)) {
//                 goThroughItem(item)
//             } else {
//                 addToSum(item);
//             }
//         });
//     }
//     goThroughItem(arr);
//     return sum;
// }

// const accountantBook = [
//     5,
//     [100, 200, 300],
//     [500, 600, 320],
//     [34, 234, 534],
//     [236, 362, [3, 705, 20, [20, 30, 50, [70, 34]]]],
// ];

// const testSum = testFunc(accountantBook);
// console.log(testSum);
// !!!!!!!!!!!!!!!!!! //
// const arr1 = [1, 2, [3], [4, 5], 6, []];
// const flattened = arr1.flatMap(num => num);
// console.log(flattened);
// const calcSumm = (a, b) => {
//     return b === 3 ? a : a * calcSumm(a, b + 1);
// };
// console.log(calcSumm(-2, -3));
// -2 * -2 * -2 * -2 * -2 * -2
// while (i < 20) {
//     console.log(i);
//     i++;
// }
// do {
//     console.log('test');
// } while(true === false);


