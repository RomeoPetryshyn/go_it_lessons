console.log('Executing index.js script...');
//
//
//
const cars = [
    { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
    { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
    { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
    { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
    { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
    { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
    { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
  ];
//
//
//
// 1. Пишемо функцію `getModels` яка повертає масив моделей (поле model) всіх автомобілів.
// const getModels = cars => {};
// console.table(getModels(cars));
//
//
//
// 2. Пишемо функцію `makeCarsWithDiscount` яка повертає новий масив об'єктів із змінним
// значенням властивості `price` залежно від переданої знижки.
// const makeCarsWithDiscount = (cars, discount) => {};
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
//
//
//
// 3. Пишемо функцію `filterByPrice` яка повертає масив автомобілів ціна яких менша
// ніж значення параметра `threshold`.
// const filterByPrice = (cars, threshold) => {};
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
//
//
//
// 4. Пишемо функцію `getCarsWithDiscount` яка повертає масив автомобілів властивість onSale яких true.
// const getCarsWithDiscount = cars => {};
// console.table(getCarsWithDiscount(cars));
//
//
//
// 5. Пишемо функцію `getCarsWithType` яка повертає масив автомобілів тип яких 
// збігається зі значенням параметра `type`.
// const getCarsWithType = (cars, type) => {};
// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
//
//
//
// 6. Пишемо функцію `getCarByModel` яка шукає автомобіль по його моделі (find).
// const getCarByModel = (cars, model) => {};
// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
//
//
//
// 7. Пишемо функцію `sortByAscendingAmount` яка повертає новий масив автомобілів відсортований за 
// зростанням значення якості `amount`. array.sort((a, b) => a - b);
// const sortByAscendingAmount = cars => {};
// console.table(sortByAscendingAmount(cars));
//
//
//
// !!
//    compareFn(a, b) return value	sort order
//       > 0    	sort a after b
//       < 0	    sort a before b
//       === 0	    keep original order of a and b
// !!
//
// 8. Пишемо функцію `sortByDescendingPrice` яка повертає новий масив автомобілів
// відсортований за зменшенням значення властивості `price`. array.sort((a, b) => b - a);
// const sortByDescendingPrice = cars => {};
// console.table(sortByDescendingPrice(cars));
//
//
//
// 9. Пишемо функцію `sortByModel` яка повертає новий масив автомобілів відсортований
// за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// значення параметра `order`.
// const sortByModel = (cars, order) => {};
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
//
//
//
// 10. Пишемо функцію `getTotalAmount` яка повертає загальну кількість автомобілів (значення
// властивостей `amount`). Використовуємо reduce.
// const getTotalAmount = cars => {};
// console.log(getTotalAmount(cars));
//
//
//
// 11. Пишемо функцію `getAvailableCarNames` яка повертає масив моделей автомобілів, але
// тільки тих, які зараз на розпродажі.
// const getModelsOnSale = cars => {};
// console.table(getModelsOnSale(cars));
//
//
//
// 12. Пишемо функцію `getSortedCarsOnSale` яка повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.
// const getSortedCarsOnSale = cars => {};
// console.table(getSortedCarsOnSale(cars));
//
//
//
