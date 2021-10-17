export default class CountryInformation {
    // constructor() { };

    countryInformation() {
        const url = 'https://restcountries.com/v2/name/peru';
        fetch(url)
        .then(r => r.json)
        .then(console.log);
     };
    

};