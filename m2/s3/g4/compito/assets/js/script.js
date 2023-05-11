let keyApi = "KmM9xKD9CXFfYgDvbw07FmAJCaqAfJedXmjvCA0Pdt569IdelcZP7HHo";


//function of the button with id "primaryImg" for the fetch of the primary images
let loadPrimary = function () {
    //putting the primaryImg into a variable
    let primaryImg = document.getElementById('primaryImg');
    //adding an event listener to the primaryImg button
    primaryImg.addEventListener('click', function () {
        //Authorization 
        fetch('https://api.pexels.com/v1/search?query=animals',{
            method: 'GET',
            headers: {
                'Authorization': keyApi
            }
        });
        //Fetching the objects from the API
        fetch('https://api.pexels.com/v1/search?query=animals')
        .then(resp => resp.json())
        .then(photos => {
            console.log(photos);
    })
    .catch(err => console.log(err));


    //replacement of the empty cards in the html document with the cards with the "primaryImg" from the API

    let loadPrimaryCards = function () {
        //finding the cards in the html document and make the class a variable
        let primaryCards = document.getElementsByClassName('card');

        primaryCards.forEach((photo) =>{
            
        })
}

});




}
loadPrimary();

//function of the button with id "secondaryImg" for the fetch of the secondary images
let loadSecondary = function () {
    //putting the secondaryImg into a variable
    let secondaryImg = document.getElementById('secondaryImg');
    //adding an event listener to the secondaryImg button
    secondaryImg.addEventListener('click', function () {
        //Authorization
        fetch('https://api.pexels.com/v1/search?query=house',{
            method: 'GET',
            headers: {
                'Authorization': keyApi
            }
            });
            //Fetching the objects from the API
        fetch('https://api.pexels.com/v1/search?query=house')
            .then(resp => resp.json())
            .then(data => {
                console.log(data.photos);
            })
            .catch(err => console.log(err));    
        })
    }
loadSecondary();