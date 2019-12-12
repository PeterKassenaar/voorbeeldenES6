// 0213-destructuring.js

// 0. A destructuring (ES6) example.
// The Movie API returns an object with 3 properties.
// We return this as an array, so it can be destructured in
// the consuming function

// 	1. Some constants
const url = 'https://www.omdbapi.com/?apikey=f1f56c8e&s=Avatar'; // TODO: make movie title dynamic
const myMovies = fetch(url); // using native browser .fetch()
const listMovies = document.querySelector('#listMovies'); // DOM caching
const divTotalResults = document.querySelector('#divTotalResults'); // DOM caching

// 2. Our 'API' (i.e. the 'controller' of the application).
// This of course lives in a different file in real life applications.
const apiCall = async () => {
	const response = await myMovies;
	return await response.clone().json(); // using .clone() here so the json can be consumed more than once. Credits: https://stackoverflow.com/questions/53511974/javascript-fetch-failed-to-execute-json-on-response-body-stream-is-locked
};

// 3. the 'view' of the application, calls the controller.
// It has ALSO be marked as async, b/c the API returns a Promise(!).
const getMovies = async () => {
	// 3a. The result of the API-call is 'destructured' into three
	// different variables, namely Search, totalResults and Response.
	// This is what the API returns. So the frontend HAS to know what the
	// backend returns.
	const {Search, totalResults} = await apiCall(); // <== Destructuring notation. Here an object, b/c the API returns an object

	// 3b. We now can work with the variables as normal
	Search.forEach(movie => {
		listMovies.innerHTML += `<li>${movie.Title} - ${movie.Year}</li>`
	});
	// 3c. Show the total number of results
	divTotalResults.innerHTML = `Total results found: ${totalResults}`
};

//************************
// Helper functions to handle button clicks etc.
//************************
document.querySelector('#btnGetMovies')
	.addEventListener('click', () => {
		getMovies();
	});
document.querySelector('#btnClear')
	.addEventListener('click', () => {
		// Reset UI
		listMovies.innerHTML = '';
		divTotalResults.innerHTML = '';
	});
