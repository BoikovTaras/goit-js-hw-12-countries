import './sass/main.scss';


// Файлы js
import countryCard from './templates/country-card.hbs';
import countryInformation from './js/fetchCountries.js';



var debounce = require('lodash.debounce');
const countryArea = document.querySelector('.country-block');
const inputArea = document.querySelector('.js-input-area')


const fetchCountry = e => {
    console.log(e.target.value);
    countryInformation(e.target.value)
    .then(response => {
        return response.json();
    })
    .then(country => {
        if (country.length === 1) {
            console.log('country', country);
            let countryResult = countryCard(country);
            countryArea.innerHTML = countryResult;
        } else if (country.length >= 2 && country.length <= 10) {
            console.log('country 2-10', country);
            countryArea.innerHTML = country
            .map(({ name }) => `<li>${name}</li>`)
            .join('');
        } else if (country.length >= 10) {
            console.log('country >10', country);
        }

    })
    .catch(error => {
        console.log('Борода')
    })
};



inputArea.addEventListener('input', debounce(fetchCountry, 500));
