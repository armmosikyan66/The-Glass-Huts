let countries = document.querySelector('.form-control');
let phone = document.querySelector('.phone__num');
countries.addEventListener('click', () => {
    console.log(countries.value);
    phone.innerHTML = `<input value='${countries.value + " "}' />`
})