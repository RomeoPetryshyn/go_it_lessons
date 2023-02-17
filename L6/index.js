console.log('Executing index.js script...');
//
//
//
// 1. Деструктуризація. Будемо переписувати функцію так, щоб вона 
// приймала один об'єкт параметрів замість набору незалежних аргументів.
// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
// // Було наступним чином:
// console.log(calcBMI({ weight: '88,3', height: '1.75' }));
// console.log(calcBMI({ weight: '68,3', height: '1.65' }));
// console.log(calcBMI({ weight: '118,3', height: '1.95' }));
//
//
//
// 2. Будемо переписувати функцію так, щоб вона приймала один 
// об'єкт параметрів замість набору незалежних аргументів.
// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//       console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }
// // Було наступним чином:
// printContactsInfo(
//     {
//         names: ['Jacob','William','Solomon','Artemis'],
//         phones: '89001234567,89001112233,890055566377,890055566300',
//     }
// );
//
//
//
// 3. Глибока деструктуризація. Будемо переписувати функцію так, щоб вона 
// приймала один об'єкт параметрів замість набору незалежних аргументів.
// function getBotReport({companyName1, bots1: {repair, defence: {numberOfItems}}}) {
//     return `${companyName1} has ${repair + numberOfItems} bots in stock`;
// }
// // // Було наступним чином:
// // // console.log(getBotReport('Cyberdyne Systems', 150, 50));
// // // Має бути наступним чином:
// console.log(
//     getBotReport(
//         {
//             companyName1: 'Cyberdyne Systems',
//             bots1: {
//                 repair: 150,
//                 defence: {
//                     numberOfItems: 50
//                 },
//             },
//         }
//     ),
// );
// function testUser({name, wife, age, wifeDog}) {
// }
// testUser(name, wife, age);
// const user = {
//     name: 'John',
//     age: 40,
//     wife: {
//         name: 'Jane',
//         age: 40,
//         dog: {
//             name: 'Jake',
//             age: 5,
//             color: 'red',
//             type: 'something'
//         }
//     },
//     child: {
//         name: 'Josh',
//         age: 5
//     }
// };

// const { wife: { dog: {
//     name, age, color, type, a, b, c, d
// }} } = user;
// user.wife.dog.name;
// user.wife.dog.age;
// user.wife.dog.color;
// user.wife.dog.type;
// user.wife.dog.name;
// user.wife.dog.age;
// user.wife.dog.color;
// user.wife.dog.type;
// user.wife.dog.name;
// user.wife.dog.age;
// user.wife.dog.color;
// user.wife.dog.type;
// user.wife.dog.name;
// user.wife.dog.age;
// user.wife.dog.color;
// user.wife.dog.type;
//
//
//
// 4. Будемо переписувати функцію так, щоб вона приймала об'єкт параметрів із властивостями
// `companyName` та `stock` та виводила репорт про кількість товарів на складі будь-якої компанії.
// Рішення
// function getStockReport({ companyName, stock }) {
//     let total = 0;
//     for (const value of Object.values(stock)) {
//       total += value;
//     }
//     return `${companyName} has ${total} items in stock`;
// }
// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"
// console.log(
//     getStockReport({
//       companyName: 'Belacci',
//       stock: {
//         shoes: 20,
//         skirts: 10,
//         hats: 5,
//       },
//     }),
// ); // "Belacci has 35 item in stock"
//
//
//
// 5. Операція spread. Будемо писати функцію `createContact(partialContact)` так, щоб вона повертала новий
// об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
// значенням "default" якщо в `partialContact` немає такої властивості.
// function createContact(partialContact) {   
//     return {
//       list: 'default',
//       ...partialContact,
//       id: generateId(),
//       createdAt: Date.now(),
//     };
// }
// console.log(
//     createContact({
//       name: 'Mango',
//       email: 'mango@mail.com',
//       list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//       name: 'Poly',
//       email: 'poly@hotmail.com',
//     }),
// );
//
//
//
// 6. Операція rest. Будемо писати функцію `transformUsername(user)` так, щоб вона 
// повертала новий об'єкт із властивістю `fullName`, замість `firstName` та `lastName`.
// function transformUsername({firstName, lastName, ...userInfo}) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         firstName,
//         lastName,
//         ...userInfo
//     }
// }
// console.log(
//     transformUsername({
//       id: 1,
//       firstName: 'Jacob',
//       lastName: 'Mercer',
//       email: 'j.mercer@mail.com',
//       friendCount: 40,
//     }),
// ); // {id: 1, fullName: 'Jacob Mercer', firstName: 'Jacob', lastName: 'Mercer', email: 'j.mercer@mail.com', friendCount: 40,}
// console.log(
//     transformUsername({
//       id: 2,
//       firstName: 'Adrian',
//       lastName: 'Cross',
//       email: 'a.cross@hotmail.com',
//       friendCount: 20,
//     }),
// );

// [user1, user2, user3, user4];
// const users = {
//     user1: {},
//     user2: {}
// }
// users.user1;
// for () {
// if (user.name === 'Jack')
// }
// function test({usersArray}) {
//     for (let i = 0; i < usersArray.lenght; i++) {
//         if (usersArray[i].name === 'Josh') {
//             console.log(usersArray[i]);
//         }
//     }
// }
// const userJohn = {
//     name: 'John',
//     lastName: 'Johnson'
// };
// const userJack = {
//     name: 'Jack',
//     lastName: 'Jackson'
// };
// const userMike = {
//     name: 'Mike',
//     lastName: 'Mikeson'
// };
// const userJosh = {
//     name: 'Josh',
//     lastName: 'Josnson'
// };
// const usersObj = {
//     userJohn, userJack
// }
// // test(usersObj);
// const usersArray = [userJohn, userJack, userMike, userJosh];







// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }



// function test2({a, b, c, g, f, t, y ,s, q, r}) {

// }

// test({f, t, y ,s, q, r});



// function showUserChildPhoneInfo(user) {
//     const {
//         wife: {
//             child: {
//                 childName,
//                 phone: {
//                     ...childPhoneParams
//                 }
//             }
//         }
//     } = user;
//     const fullChildPhoneInfo = {
//         childName,
//         ...childPhoneParams,
//         createdAt: Date.now()
//     };
//     return fullChildPhoneInfo;
// }

// const user = {
//     name: 'John',
//     age: 40,
//     wife: {
//         name: 'Jane',
//         age: 40,
//         child: {
//             childName: 'Jake',
//             age: 5,
//             phone: {
//                 name: 'Apple',
//                 age: 5,
//                 color: 'black',
//                 os: 'Apple OS',
//                 model: 5,
//                 cpu: 3
//             }
//         }
//     },
//     dog: {
//         name: 'Jake',
//         age: 5
//     }
// };

// console.log(showUserChildPhoneInfo(user));













