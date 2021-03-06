
async function getFilms() {
    try {
        const response = await fetch('https://api.ntoni.tech/wp-json/wc/store/products/342');
        const jsonObject = await response.json();
        console.log(jsonObject);
        const jsonArray = jsonObject.images;
        console.log('Something', jsonArray)


        // create the link to go to the details page

        for (let i = 0; i < jsonArray.length; i++) {

            document.querySelector('.film--suggestion--reel__flexbox').innerHTML += `
	    <div class="film--suggestion--reel__img">
            <img class ="countryimg" src="${jsonArray[i].scr}">
            <a href="healing_the_country.html?id=${jsonArray[i].id}">Read More</a>
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