'use stict';

const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

const url = 'https://randomuser.me/api?results=50';

filter.addEventListener('input', (event) => filterData(event.target.value));

getData();
async function getData() {
    const response = await fetch(url);
    const { results } = await response.json();

    //clear result
    result.innerHTML = '';

    results.forEach((user) => {
        const userEl = document.createElement('li');
        userEl.classList.add('user');

        const { large: image } = user.picture;
        const { first: name, last: surname } = user.name;
        // const { last: surname } = user.name;
        const { city, country } = user.location;
        listItems.push(userEl);
        userEl.innerHTML = `
        <img src="${image}" alt=${name}>
        <div class="user-info">
            <h4>${name} ${surname}</h4>
            <p>${city}, ${country}</p>
        </div>
        `;

        result.appendChild(userEl);
    });
}

function filterData(searchTerm) {
    listItems.forEach((item) => {
        if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}
