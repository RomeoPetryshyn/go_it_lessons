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
//
//
//
// 2. Напишемо невеликий скрипт за допомогою якого будемо виводити
// кількість днів до великодня 2023. ( 2023-04-16 )
//
//
//
// 3. Будемо писати невеличкий годинник на базі тої розмітки що ми маємо.
// Використовуватимемо інтервал для зміни положення стрілок та клас Date для роботи з часом.
// hr_rotation = 30 * hr + min / 2; // converting current time
// min_rotation = 6 * min;
// sec_rotation = 6 * sec;
// hour.style.transform = `rotate(${hr_rotation}deg)`;
// minute.style.transform = `rotate(${min_rotation}deg)`;
// second.style.transform = `rotate(${sec_rotation}deg)`;
//
//
//
// 4. Будемо писати скрипт який перевірятиме чи користувач досі на сторінці
// якщо користувач не наживає нікуди протягом 10-секунд - будемо виводити
// confirm який перевірятиме чи користувач досі знаходиться на сторінці.
// const message = 'Are you still here';
// const timeoutInMilliseconds = 60000;
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
