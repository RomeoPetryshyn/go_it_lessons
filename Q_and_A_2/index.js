// First we select the element we want to target
// const target = document.querySelector('.animated-text');
// const target1 = document.getElementById('animated-text-1');
// const target2 = document.getElementById('animated-text-2');

// // Next we want to create a function that will be called when that element is intersected
// function handleIntersection(entries) {
//     console.log(entries);
//     // The callback will return an array of entries, even if you are only observing a single item
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible')
//         } else {
//             entry.target.classList.remove('visible')
//         }
//     });
// }

// // Next we instantiate the observer with the function we created above. This takes an optional configuration
// // object that we will use in the other examples.
// const observer = new IntersectionObserver(handleIntersection);

// // Finally start observing the target element
// observer.observe(target1);
// observer.observe(target2);
// https://medium.com/@ryanfinni/the-intersection-observer-api-practical-examples-7844dfa429e9
//
//
//
//
//
// Debugger
// let test1 = 5;
// function counter(a, b) {
//     return b + a;
// }
// let test2 = 10;
// const res = counter(test1, test2);
// test1 = 8;
// test2 = 3;
// const res2 = counter(test2, test1);
// let superRes = res + res2;




// fetch("https://jsonplaceholder.typicode.com/usasdasdaers")
//   .then(response => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
// });







// const arr = [
//     {
//         url: 'www.example.com/hello',
//         id: "22"    
//     },
//     {
//         url: 'www.example.com/hello',
//         id: "22"    
//     },
//     {
//         url: 'www.example.com/hello-how-are-you',
//         id: "23"    
//     },
//     {
//         url: 'www.example.com/i-like-cats',
//         id: "24"    
//     },
//     {
//         url: 'www.example.com/i-like-pie',
//         id: "25"    
//     }
// ]
// const uniqArrayOfObjects = _.uniqBy(arr, 'id');
// console.log({ arr, uniqArrayOfObjects });