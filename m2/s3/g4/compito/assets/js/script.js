let keyApi = "KmM9xKD9CXFfYgDvbw07FmAJCaqAfJedXmjvCA0Pdt569IdelcZP7HHo";


//function of the button with id "primaryImg" for the fetch of the primary images
let loadPrimary = function () {
    let primaryImg = document.getElementById('primaryImg');
    primaryImg.addEventListener('click', function () {
        let primary = fetch('https://api.pexels.com/v1/search?query=animals',{
            method: 'GET',
            headers: {
                'Authorization': keyApi
            }
        });
    });
};
loadPrimary();

//function of the button with id "secondaryImg" for the fetch of the secondary images
let loadSecondary = function () {
    let secondaryImg = document.getElementById('secondaryImg');
    secondaryImg.addEventListener('click', function () {
        let secondary = fetch('https://api.pexels.com/v1/search?query=house',{
            method: 'GET',
                        headers: {
                            'Authorization': keyApi
                        }
        });
        })
    }
loadSecondary();