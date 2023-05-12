function salva() {
    let firstName = document.getElementById('nome');
    window.localStorage.setItem('nome', firstName.value);
    let data = JSON.parse(window.localStorage.getItem('nome'));
    console.log(data);

}