export function renderCountryCard(country) {

    const countryCard = document.createElement('div');
    const a = document.createElement('a');
    const h3 = document.createElement('h3');
    const flagImg = document.createElement('img');

    countryCard.classList.add('country-card');
    flagImg.classList.add('country-flag');
    a.classList.add('each-country');

    h3.textContent = country.name;
    flagImg.src = `./assets/${country.name}-flag.png`;
    a.href = `./detail/?id=${country.id}`;

    countryCard.append(h3, a);
    a.append(flagImg);

    return countryCard;
}

export function renderCountryDetail(country) {
    const detailContainerEl = document.createElement('div');
    const exportEl = document.createElement('p');
    const nameEl = document.createElement('h1');
    const populationEl = document.createElement('p');
    const sizeEl = document.createElement('p');
    const landmarksEl = document.createElement('p');
    const img = document.createElement('img');
    
    nameEl.textContent = country.name;
    nameEl.classList.add('country-name');
    
    exportEl.textContent = `Primary export is ${country.primary_export}`;
    exportEl.classList.add('country-export');
    
    populationEl.textContent = `Population: ${country.population}`;
    populationEl.classList.add('country-pop');
    
    sizeEl.textContent = `${country.size_sq_mi} square miles`;
    sizeEl.classList.add('country-size');
    
    landmarksEl.textContent = `Notable landmarks include ${country.landmarks}`;
    landmarksEl.classList.add('country-landmarks');

    img.src = `../assets/${country.name}.png`;
    img.classList.add('detail-img');

    detailContainerEl.classList.add('country-detail');
    img.classList.add('country-img');

    detailContainerEl.append(nameEl, sizeEl, populationEl, exportEl, landmarksEl, img);

    return detailContainerEl;
}
