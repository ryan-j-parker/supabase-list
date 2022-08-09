function renderCountryCard(country) {

    const div = document.createElement('div');
    const a = document.createElement('a');
    const p = document.createElement('p');
    const img = document.createElement('img');

    div.classList.add('country-card');

    p.textContent = country.name;
    img.src = `./assets/${country.img}.png`;
    a.href = `./detail/?id=${country.id}`;

    div.append(p, img);
    a.append(div);

    return a;
}

function renderCountryDetail(country) {
    const div = document.createElement('div');
    const exportEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const populationEl = document.createElement('p');
    const sizeEl = document.createElement('p');
    const landmarksEl = document.createElement('p');
    const img = document.createElement('img');

    nameEl.textContent = central_american_countries.name;
    exportEl.textContent = central_american_countries.primary_export;
    populationEl.textContent = central_american_countries.population;
    sizeEl.textContent = central_american_countries.size_sq_mi;
    landmarksEl.textContent = central_american_countries.landmarks;

    img.src = `../assets/${country.img}.png`;

    div.classList.add('country-detail');

    div.append(nameEl, sizeEl, populationEl, exportEl, landmarksEl, img);

    return div;
}