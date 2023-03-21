const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data));
}



const displayData = countries =>{
    // console.log(countries);
    const countriesHtml = countries.map(country => { 
        return getCountryHtml(country);
    });
    console.log(countries[1]);

    // // dom manipulation 
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
};



const getCountryHtml = ({name, flags, capital}) => {
    return `
        <div class= 'country'>
            <h2>${name.common}</h2>
            <h3>${capital}</h3>
            <img src="${flags.png}" alt="${name.common}">
        </div>`
}

loadData();