// 0.1 Обговоримо що таке асинхронність.
// 0.2 Обговоримо базові принципи роботи класу Date.
//
//
//
// 1. Будемо писати невеличкий скрипт який описуватиме роботу шеф кухаря.
// Наш шеф-кухар Jake отримав наступні замовлення:
// 1. Салат Грецький (час приготування - 3с)
// 2. Паста (час приготування - 8с)
// 3. Какао (час приготування - 0.5с)
// 4. Склянку води (не потрібно готувати, 0с)
// 5. Хліб (не потрібно готувати, 0с)
// 6. Бокал грузинського вина (не потрібно готувати, 0с)
// 7. Сирний суп (час приготування 5с)
// 8. Салат Цезар (час приготування 3.5с)
// Нам потрібно організувати наш скрипт таким чином, щоб операції які виконуються
// довше розпочати виконувати спочатку, щоб за час очікування інші операції були виконані.
// setTimeout(() => {
//     console.log('Паста');
// }, 8000);
// setTimeout(() => {
//     console.log('Склянку води');
// }, 1500);
// setTimeout(() => {
//     console.log('Ще щось');
// }, 0);
// setTimeout(() => {
//     console.log('Ще щось');
// }, 0);
// setTimeout(() => {
//     console.log('Какао');
// }, 500);
// setTimeout(() => {
//     console.log('Сирний суп');
// }, 5000);
// setTimeout(() => {
//     console.log('Салат Грецький');
// }, 3000);
//
//
//
// 2. Напишемо невеликий скрипт за допомогою якого будемо виводити
// кількість днів до великодня 2023. ( 2023-04-16 )
// getting dates
// const currentDate = new Date();
// const easterDate = new Date('2023-04-16');
// // getting day number
// const currentDayNumber = currentDate.getDate();
// const easterDayNumber = easterDate.getDate();
// // getting difference
// const daysTillEaster = easterDayNumber - currentDayNumber;
// // adding to html
// const elem = document.getElementById('days-elem');
// elem.innerHTML = daysTillEaster;
// another way
// const date1 = new Date('7/13/2010');
// const date2 = new Date('12/15/2010');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffTime + " milliseconds");
// console.log(diffDays + " days");
//
//
//
// 3. Будемо писати невеличкий годинник на базі тої розмітки що ми маємо.
// Використовуватимемо інтервал для зміни положення стрілок та клас Date для роботи з часом.
// setInterval(() => {
//     const currentDate = new Date();
//     const min = currentDate.getMinutes();
//     const hr = currentDate.getHours();
//     const sec = currentDate.getSeconds();
//     const hr_rotation = 30 * hr + min / 2; // converting current time
//     const min_rotation = 6 * min;
//     const sec_rotation = 6 * sec;
//     hour.style.transform = `rotate(${hr_rotation}deg)`;
//     minute.style.transform = `rotate(${min_rotation}deg)`;
//     second.style.transform = `rotate(${sec_rotation}deg)`;
// }, 1000);
//
//
//
// 4. Будемо писати скрипт який перевірятиме чи користувач досі на сторінці
// якщо користувач не наживає нікуди протягом 10-секунд - будемо виводити
// confirm який перевірятиме чи користувач досі знаходиться на сторінці.
// const message = 'Are you still here?';
// const timeoutInMilliseconds = 10000;
// const timeoutHandler = () => {
//     if (confirm(message)) {
//         window.clearTimeout(timeoutHandler);
//         window.setTimeout(timeoutHandler, timeoutInMilliseconds);
//     } else {
//         window.clearTimeout(timeoutHandler);
//         window.close();
//     }
// }
// window.setTimeout(timeoutHandler, timeoutInMilliseconds);
// document.addEventListener('click', () => {
//     window.clearTimeout(timeoutHandler);
// });
