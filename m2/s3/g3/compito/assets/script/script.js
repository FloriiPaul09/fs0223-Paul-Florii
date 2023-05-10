let cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener('click', (event) => {
        event.target.remove();
    });
}