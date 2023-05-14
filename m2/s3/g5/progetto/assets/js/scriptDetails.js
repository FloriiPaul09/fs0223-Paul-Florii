const urlSite = "https://striveschool-api.herokuapp.com/api/product/";

const contentDetails = (product) => {
    let colFiller = `
    <img scr="${product.imageUrl}" class="giantMaker">
    <div>
        <h2>${product.brand} ${product.name}</h2>
        <p>${product.description}<p>
    </div>
    <div>
        <a href="Homepage" class="btn btn-primary text-light">Back</a>
    </div>
    `;

    let colToFill = document.getElementById('area51');
    colToFill.innerHTML = colFiller;
}

const getProductDetails = () => {
    let productId = new URLSearchParams(window.location.search).get('productId');
    fetch(urlSite + productId, {
        'method' : 'GET',
        'headers' : {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNTBjNDg4Zjc0MDAwMTQyODc5ODEiLCJpYXQiOjE2ODM5NjI2MzIsImV4cCI6MTY4NTE3MjIzMn0.KW8Ppe_B0MqoQ-G5tlzlvkuk0JlmY0YoNgq8_9LLsdA',
            'Content-Type' : 'application/json',
        },
    })
    .then((res) =>{
        if (res.ok){
            return res.json()
        }else{
            throw new Error('Error getting the product details!')
        }
    })
    .then((productDetails) => {
        console.log('Selected product details:', productDetails);
        contentDetails(productDetails)
    })
    .catch((err) => {
        console.log(err)
    })
    
}

window.onload = () => {
    getProductDetails()
}

