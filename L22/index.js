//
//
//
// 0.1 Порівняємо код написаний з промісами та з async/await
// function myFunctionWithPromises() {
//     return callApi()
//         .then(response => response.json())
//         .then(data => {
//             return processResult(data);
//         }).then((processedData) => {
//             return processedData;
//         }).catch(error => console.error(error));
// };
// async function myFunctionWithAsync() {
//     try {
//         const response = await callAPI();
//         const data = await response.json();
//         const processedData = await processResult(data);
//         return processedData;
//     } catch (error) {
//         console.error(error);
//     }
// }
//
//
// 
// 1. Будемо переписувати всі завдання з минулих тем з використанням async/await
//
//
//