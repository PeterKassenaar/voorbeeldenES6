// uitwerking oefening 9 - Promises/fetch

// 5. Workshop/ oefening 9
const urlNameCountries = 'https://restcountries.eu/rest/v2/name/'; // + {name}

// 5a. caching van UI-elementen
const btnGet = document.querySelector('#btnGet');
const partialCountries = document.querySelector('#partialCountries');

// 5b. Event handler
btnGet.addEventListener('click', () => {
    // 5c. haal naam van country op uit textbox
    const countryName = document.querySelector('#txtCountryName').value;
    console.log({countryName});

    // 5d. Voer fetch uit en verwerk resultaten.
    fetch(`${urlNameCountries}${countryName}`)
        .then(
            response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        partialCountries.innerHTML = ''; // reset
                        data.forEach(country => {
                            partialCountries.innerHTML += `<li>${country.name}</li>`;
                        })
                    })
                }
            }
        )
    // 5e. Todo: Error handling!
});
