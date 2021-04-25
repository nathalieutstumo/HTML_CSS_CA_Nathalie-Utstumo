
async function getFilms() {
    try {
        const response = await fetch('https://api.ntoni.tech/wp-json/wc/store/products/');
        const jsonObject = await response.json();
        // console.log(jsonObject);
        const jsonArray = jsonObject.images;
        console.log('Something', jsonArray)


        // create the link to go to the details page

        for (let i = 0; i < jsonArray.length; i++) {

            document.querySelector('main').innerHTML += `
	    <div class="card">
            <img class ="filmImg" src="${jsonArray[i].src}">
            <h2>${jsonArray[i].name}</h2>
            <p>${jsonArray[i].short_description}</p>
            <a href="details.html?id=${jsonArray[i].id}">Read more</a>
	    </div>
	`;
        }

    } catch (error) {
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

getFilms();