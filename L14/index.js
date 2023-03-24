console.log('Executing index.js script...');

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo ' +
'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis '
' nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

// 0.1 - Бібліотека lodash
// const result = _.add(2, 3);
// console.log(result); // 5
//
//
//
// 0.2 - Обговоримо принцип роботи веб-додатків та важливість інструментів які
// будемо розглядати сьогодні на прикладі схемки.
//
//
//
// 1. Розлянемо роботу throttle
// document.addEventListener(
//     "scroll",
//     _.throttle(() => {
//       console.log("Scroll handler call every 300ms");
//     }, 300)
// );
//
//
//
// 2. Розглянемо роботу debounce
// document.addEventListener(
//     "scroll",
//     _.debounce(() => {
//       console.log("Scroll handler call after 300ms pause");
//     }, 300)
// );
//
//
//
// 3. Lazy loading через loading="lazy" атрибут img
// Будемо виводити фотографії кішок динамічно, спробуємо використати lazy loading.
const cats = [
    "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg",
    "https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg",
    "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
    "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
    "https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg",
    "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
    "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg",
    "http://www.catster.com/wp-content/uploads/2017/08/Hairless-cat.jpg",
    "https://www.vetbabble.com/wp-content/uploads/2016/11/hiding-cat.jpg",
    "https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg",
    "https://news.nationalgeographic.com/content/dam/news/2018/01/29/cats-right-paw/01-Cats.jpg",
    "http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg",
];
//
//
//
// 4. Будемо писати input який буде давати підказки відповідно до того що вводить користувач.
// По принципу роботи інтернет-магазину побутових приладів.
// Будемо використовути інструменти розглянуті вище.
const dataForSearch = [
    {name: 'toster', description: lorem},
    {name: 'microvave', description: lorem},
    {name: 'fridge', description: lorem},
    {name: 'television', description: lorem},
    {name: 'vacuum', description: lorem},
    {name: 'cookstove', description: lorem},
    {name: 'laundry', description: lorem},
    {name: 'oven', description: lorem},
    {name: 'blender', description: lorem},
    {name: 'grinder', description: lorem},
    {name: 'kettle', description: lorem},
    {name: 'teapot', description: lorem},
    {name: 'iron', description: lorem},
    {name: 'vaporizer', description: lorem},
];




