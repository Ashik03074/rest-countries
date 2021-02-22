fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

displayCountries = countries => {
    const divCountries = document.getElementById('divCountries');
    countries.forEach(country => {
        const divCountry = document.createElement('div');
        divCountry.className = 'country';
        
        
        const countryInfo = `
             <h2 class="country-name">${country.name}</h2>
             <p>${country.capital}</p>
             <button onClick="showDetail('${country.name}')">Detail</button>
        `
        divCountry.innerHTML = countryInfo;
        divCountries.appendChild(divCountry);
    });
    // for( let i =0 ;i< countries.length;i++){
    //     const country = countries[i];
    
        
    // }
}

const showDetail = country =>{
    const url = `https://restcountries.eu/rest/v2/name/${country}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderDetail(data[0]))
}

const renderDetail = country =>{
    console.log(country);
    const detail = document.getElementById('countryDetail');
    detail.innerHTML = `
        
        <h1>Name : ${country.name}</h1>
        <h3>Capital: ${country.capital}</h3>
        <p>Population:${country.population}</p>
        <p>Region:${country.region}</p>
        <img src="${country.flag}">


    `
}