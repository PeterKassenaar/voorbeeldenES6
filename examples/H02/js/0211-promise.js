//0211-promise.js

// 1. creating a Promise, using the new Promise() constructor
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 90) {
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

// 2. Using a Promise, call the .then() function
myPromise.then(
    success => console.log('Promise successful:::', success),
    error => console.log('Promise failed:::', error)
);

// 3. Or, using a for-loop
// function createPromise() {
//     return new Promise((resolve, reject) => {
//         if (Math.random() * 100 <= 90) {
//             resolve('Hello, Promises!');
//         }
//         reject(new Error('In 10% of the cases, I fail. Miserably.'));
//     });
// }
//
// for (let i = 0; i < 100; i++){
//     const newPromise=createPromise();
//     newPromise.then(
//         success=> {
//             successes++;
//             console.log('Promise successful:::', success)
//         },
//         error =>{
//             errors++;
//             console.log('Promise failed:::', error)
//         }
//     )
// }

// 4. Calling an external API, using fetch() - which returns a Promise
// Using the RestCountries API, see https://restcountries.eu/#api-endpoints-all for details.
const url = 'https://restcountries.eu/rest/v2/all';
const myCountries = fetch(url);
const listCountries = document.querySelector('#listCountries');
myCountries.then(
    response => {
        if (response.status === 200) {
            // 4a. We received a successful response, convert it to json()
            response.json().then(data => {
                // 4b. data holds an array with all countries. Loop over each country.
                data.forEach(country => {
                    // 4c. add the country name to the list in the UI
                    listCountries.innerHTML += `<li>${country.name}</li>`;
                })
            })
        } else {
            throw new Error('Country API call failed!')
        }
    },
    reject => console.log('rejected!', reject)
);


