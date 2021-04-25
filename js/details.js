const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const loading = document.querySelector('.loading');

async function getFilms(id) {
    try {
        const response = await fetch('https://api.ntoni.tech/wp-json/wc/store/products');
        const jsonResults = await response.json();
        const jsonArray = jsonResults;

        console.log(jsonResults);

        for (let i = 0; i < jsonArray.length; i++) {
            document.title = jsonArray[i].name;
            document.querySelector('main').innerHTML += `
            <div class="card">
                <h1>${jsonArray[i].name}</h1>
                <img class ="filmImg" src="${jsonArray[i].scr}">
                <p>${jsonArray[i].short_description}</p>
            </div>
        `;
        }

    } catch (error) {
        console.log(error)
        document.querySelector('.alert').innerHTML = showAlertTouser(
            'error',
            'danger'
        );
    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = ' ';
        }, 3000);
    }
}

getFilms(id);