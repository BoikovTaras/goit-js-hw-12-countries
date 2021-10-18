const countryArea = document.querySelector('.country-block');
console.log(countryArea);


export default class CountryInformation {
    constructor() { };
    countryInformation() {
        
     };
};

import countryCard from '../templates/country-card.hbs';

const url = 'https://restcountries.com/v3.1/name/peru';
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(country => {
        console.log(country);
        const countryResult = countryCard(country);
        countryArea.innerHTML = countryResult;
    })
    .catch(error => {
        console.log(error)
    })