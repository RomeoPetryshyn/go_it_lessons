console.log('Executing index.js script...');

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo ' +
'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis '
' nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

// const input = document.getElementById('search-input');
// input.addEventListener('input', (event) => {
//     console.log('Logging');
// });

// console.log('❤️ Vanilla JS size: ', '❤️'.length)
// console.log('❤️ Lodash JS size: ', _.size('❤️'));

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
// throttle
// 1000
// 0, 300, 600, 900
// 1. Розлянемо роботу throttle
// document.addEventListener("scroll", () => {
//     console.log('I am usual event');
// });
// document.addEventListener(
//     "scroll",
//     _.throttle(() => {
//       console.log("I am throttle event");
//     }, 500)
// );
//
//
//
// 2. Розглянемо роботу debounce
// document.addEventListener("scroll", () => {
//     console.log('I am usual event');
// });
// document.addEventListener(
//     "scroll",
//     _.debounce(() => {
//         // code
//         console.log("I am debounce event");
//     }, 5000)
// );
//
//
//
// 3. Lazy loading через loading="lazy" атрибут img
// Будемо виводити фотографії кішок динамічно, спробуємо використати lazy loading.
// const cats = [
//     "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg",
//     "https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg",
//     "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
//     "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
//     "https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg",
//     "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
//     "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg",
//     "http://www.catster.com/wp-content/uploads/2017/08/Hairless-cat.jpg",
//     "https://www.vetbabble.com/wp-content/uploads/2016/11/hiding-cat.jpg",
//     "https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg",
//     "https://news.nationalgeographic.com/content/dam/news/2018/01/29/cats-right-paw/01-Cats.jpg",
//     "http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg",
// ];

// Destructuring
// // const [one, two, three] = [1, 2, 3];
// // // one - 1
// // // two - 2
// // // three - 3

// const buildItem = ({ src, description }) => {
//     return `
//         <div>
//             <div>
//                 <img src="${src}" alt="cat" style="width: 800px; height: 800px;">
//             </div>
//             <div>${description}</div>
//         </div>
//     `;
// };

// const container = document.getElementsByTagName('div')[0];
// const [container] = document.getElementsByTagName('div');

// const markup = _.join(_.map(cats, (catUrl) => buildItem({src: catUrl, description: lorem})), '');
// container.insertAdjacentHTML('beforeend', markup);


//
//
//
// 4. Будемо писати input який буде давати підказки відповідно до того що вводить користувач.
// По принципу роботи інтернет-магазину побутових приладів.
// Будемо використовути інструменти розглянуті вище.
// const dataForSearch = [
//     {name: 'toster', description: lorem},
//     {name: 'microvave', description: lorem},
//     {name: 'fridge', description: lorem},
//     {name: 'television', description: lorem},
//     {name: 'vacuum', description: lorem},
//     {name: 'cookstove', description: lorem},
//     {name: 'laundry', description: lorem},
//     {name: 'oven', description: lorem},
//     {name: 'blender', description: lorem},
//     {name: 'grinder', description: lorem},
//     {name: 'kettle', description: lorem},
//     {name: 'teapot', description: lorem},
//     {name: 'iron', description: lorem},
//     {name: 'vaporizer', description: lorem},
//     // {name: 'default', description: 'Not Found'},
// ];
// const searchInput = document.getElementById('search-input');
// // document.getElementsByClassName('class_name') // collection of elements by class
// // document.getElementsByTagName('div') // collection of elements by tag
// // document.querySelector('.class_name') // ELEMENT (one) by css selector
// // document.querySelectorAll('.class_name') // collection of elements by css selector
// searchInput.addEventListener(
//     "input",
//     _.debounce((event) => {
//         // const value = event.target.value;
//         const value = _.get(event, 'target.value', 'default');
//         // const filteredItems = dataForSearch.filter((item) => {
//         //     const {name} = item;
//         //     // if (name.includes(value)) {
//         //     //     return true;
//         //     // } else {
//         //     //     return false;
//         //     // }
//         //     return name.includes(value);
//         // });
//         const filteredItems = _.filter(dataForSearch, ({ name }) => {
//             return _.includes(name, value);
//         });
//         // const itemsMarkup = filteredItems.map(buildItem).join('');
//         const itemsMarkup = _.join(_.map(filteredItems, buildItem), '');
//         const container = document.querySelector('.container');
//         // container.insertAdjacentHTML('beforeend', itemsMarkup);
//         container.innerHTML = itemsMarkup;
//         // console.log(itemsMarkup);
//     }, 1000)
// )

// const buildItem = ({ name, description }) => {
//     return `
//         <div>
//             <ul>
//                 <li>Name: ${name}</li>
//                 <li>Description: ${description}</li>
//             </ul>
//         </div>
//     `;
// };






