// 0.1
// Мікро процеси (МАЮТЬ ВИЩИЙ ПРІОРИТЕТ):
// Promise
// Observer
//
// Макро процеси (МАЮТЬ НИЖЧИЙ ПРІОРИТЕТ):
// setTimeout
// setInterval
// setImmediate
//
//
//
// Promise.resolve(1)
//     .then(function () {console.log('promise1');})
//     .then(function () {console.log('promise2')});
// console.log('script start'); 
// setTimeout(function () {
//   console.log('setTimeout1');
// }, 0);
// Promise.resolve(
//   console.log('setTimeout2'))
//   .then(function () {
//     console.log('promise1');
//   })
//   .then(function () {
//     console.log('promise2');
//   });    
// console.log('script end'); // 2. script end
//
//
//
// 0.2
// Розглянемо декілька промісів для наочності
// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         const randomNumber = Math.random();
//         if (randomNumber > 0.5) {
//             res('YES');
//         } else {
//             rej('NO');
//         }
//     }, 2000);
// });
// console.log(promise);
// promise
//     .then(value => console.log(value))
//     .catch(error => console.error(error))
//     .finally(() => console.log('Experiment completed'));
//
//
//
// 1. Напишемо коротенький скрипт на базі промісів.
// Наш товариш Jake ПООБІЦЯВ (promise) нам виконати свою роботу протягом наступних 
// Трьох годин. В нас є змінна з булевим значенням під назвою didJakeDidHisJob 
// яка несе в собі інформацію про те чи виконав Jake те що обіцяв чи ні.
// Нам необхідно зачекати певний час і зробити перевірку, якщо Jake виконався свою роботу - тоді
// будемо виводити в консоль слова вдячності. Якщо ні - будемо виводити error який висловить розпач.
// const didJakeDidHisJob = false;
// const promise = new Promise((res, rej) => {
//     // if (didJakeDidHisJob) {
//     //     res('Thank you Jake!');
//     // } else {
//     //     rej('Oh no, Jake!');
//     // }
//     setTimeout(() => {
//         if (didJakeDidHisJob) {
//             res('Thank you Jake!');
//         } else {
//             rej('Oh no, Jake!');
//         }
//     }, 3000);
// });
// promise
//     .then((value) => {
//         console.log(value);
//         console.log('Jake did his job');
//     })
//     .catch((error) => {
//         console.log(error);
//         console.error('Jake failed his job');
//     })
//     .finally(() => {
//         console.log('Promise settled');
//     });
//
//
//
// 2. Jake пішов далі. Тепер він дав нам ДЕКІЛЬКА ОБІЦЯНОК одразу. Одна - про те що він
// виконає свою роботу. Друга - про те що він допоможе колезі з його завданням.
// Третя - про те що він пригостить нас всіх смачною кавою.
// Проте наша довіра до Jake вже похитнулась і якщо він не виконає хоча ще одну зі своїх
// обіцянок - нам не цікавий результат інших. Реалізуємо дану логіку використовуючи Promise
// Promise.all & Promise.allSettled
const jakePromiseBuilder = ({isSuccess, onSuccessMessage, onErrorMessage, timeoutPeriod}) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (isSuccess) {
                res(onSuccessMessage);
            } else {
                rej(onErrorMessage);
            }
        }, timeoutPeriod);
    });
};
// const jakeDidHisJob = jakePromiseBuilder({ 
//     isSuccess: false,
//     onSuccessMessage: 'Jake did his job!',
//     onErrorMessage: 'Jake did not manage to finish his job!',
//     timeoutPeriod: 3000
// });
// const jakeHelperHisTeammate = jakePromiseBuilder({
//     isSuccess: true,
//     onSuccessMessage: 'Jake helped his teammate!',
//     onErrorMessage: 'Jake did not manage to help his teammate!',
//     timeoutPeriod: 4000
// });
// const jakeBoughtEveryoneCoffee = jakePromiseBuilder({
//     isSuccess: true,
//     onSuccessMessage: 'Jake bought everyone coffee!',
//     onErrorMessage: 'Jake did not manage to buy everyone coffee!',
//     timeoutPeriod: 5000
// });
// const allJakePromises = Promise.all([jakeDidHisJob, jakeHelperHisTeammate, jakeBoughtEveryoneCoffee]);
// allJakePromises
//     .then((value) => console.log(value))
//     .catch(err => console.error(err))
//     .finally();
// const allJakePromises = Promise.allSettled([jakeDidHisJob, jakeHelperHisTeammate, jakeBoughtEveryoneCoffee]);
// allJakePromises
//     .then((value) => console.log(value))
//     .catch(err => console.error(err));
//
//
//
// 3. Пішля того як Jake підвів команду та втратив довіру - його звільнили з роботи.
// Наш Jake почав шукати нову роботу. Декілька роботодавців з якими він хоче співпрацювати
// пообіцяли йому робоче місце. Тепер Jake очікує доки йому надійде перша офіційна пропозиція
// щоб її прийняти. Реалізуємо дану логіку використовуючи Promise
// Promise.race
// const aCompanyPromise = jakePromiseBuilder({
//     isSuccess: true,
//     onSuccessMessage: 'Company A Offer',
//     onErrorMessage: 'NO Offer from company A',
//     timeoutPeriod: 2000
// });
// const bCompanyPromise = jakePromiseBuilder({
//     isSuccess: false,
//     onSuccessMessage: 'Company B Offer',
//     onErrorMessage: 'NO Offer from company B',
//     timeoutPeriod: 1000
// });
// const cCompanyPromise = jakePromiseBuilder({
//     isSuccess: true,
//     onSuccessMessage: 'Company C Offer',
//     onErrorMessage: 'NO Offer from company C',
//     timeoutPeriod: 3000
// });
// const allJakePromises = Promise.race([aCompanyPromise, bCompanyPromise, cCompanyPromise]);
// allJakePromises
//     .then((value) => console.log(value))
//     .catch(err => console.error(err));
//
//
//
// 4. Будемо писати функціонал для отримання списку користувачів і виводу їх на сторінку.
// При написанні цього симулюватимемо реальний запит на бек-енд і симулюватимемо
// успішне чи не успішне виконання цього запиту. В залежності від цього - будемо змінювати вивід.
const success = true;
function getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => {
          if (success) {
            res([
                {name: 'Jake', email: 'Jake@test.com'},
                {name: 'John', email: 'John@test.com'},
                {name: 'Jack', email: 'Jack@test.com'},
                {name: 'Jeremy', email: 'Jeremy@test.com'},
                {name: 'Johnson', email: 'Johnson@test.com'},
                {name: 'Jackson', email: 'Jackson@test.com'}
            ]);
          } else {
            rej('Error while loading users');
          }
        }, 3000);
    });
}






// getUsers()
//     .then((data) => {
//         // const divElem = document.getElementsByClassName('container')[0];
//         const [divElem] = document.getElementsByClassName('container');
//         const dataMarkup = (data.map(dataRowBuilder)).join(' ');
//         console.log({
//             dataMarkupArray: data.map(dataRowBuilder),
//             dataMarkup
//         });
//         divElem.innerHTML = `
//             <ul>${dataMarkup}</ul> 
//         `;
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// const dataRowBuilder = ({name, email}) => {
//     return `
//         <li>name: ${name} || email: ${email}</li>
//     `;
// }
// `${[1,2,3,4]}` // -> 1,2,3,4 STRING
//
//
//