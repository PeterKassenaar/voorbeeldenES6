// 0212- async/await - Available in newer browsers, from ES8 (ES2017)

// 1. This is just a normal function. It returns a promise that
// resolves after 2 sec.
const scaryClown = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('🤡');
		}, 2000);
	});
};

// 2. Here's async/await. We declare the msg function, which is async.
// It awaits the resolving of scaryClown(), before continuing.
// after that a message is printed in the console. This LOOKS like synchronous code.
const msg = async () => {
	const msg = await scaryClown();
	console.log('Message:', msg);
};

msg(); // Message: 🤡 <-- after 2 seconds

// more examples/credits: https://alligator.io/js/async-functions/

// 3. With a Fetch-example, from previous exercise
// some constants
const url = 'https://restcountries.eu/rest/v2/all';
const myCountries = fetch(url);
const listCountries = document.querySelector('#listCountries');

//**********************
// Promise-code, with fetch
//**********************
const onFetch = () => {
	setTimeout(() => {
		myCountries.then(
			response => {
				if (response.status === 200) {
					// 4a. We received a successful response, convert it to json()
					// Mark the use of .clone() here, to re-use a response object!
					response.clone().json().then(data => {
						// 4b. data holds an array with all countries. Loop over each country.
						data.forEach(country => {
							// 4c. add the country name to the list in the UI
							listCountries.innerHTML += `<li>${country.name}</li>`;
						});
						return htmlString
					})
				} else {
					throw new Error('Country API call failed!')
				}
			},
			reject => console.log('rejected!', reject)
		);
	}, 1500)
};
//**********************
// Async/await-code, with fetch
//**********************
const onAsync = async () => {
	await onFetch();
};

//**********************
// Helper code, some buttons
//**********************
document.querySelector('#btnClear').addEventListener('click', () => {
	listCountries.innerHTML = '';
});
document.querySelector('#btnFetch').addEventListener('click', () => {
	onFetch();
});
document.querySelector('#btnAsync').addEventListener('click', () => {
	onAsync();
});


// More info/credits: https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
