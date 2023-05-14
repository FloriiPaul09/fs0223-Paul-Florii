const urlSite = "https://striveschool-api.herokuapp.com/api/product/";

let adressBar = new URLSearchParams(window.location.search);

let productId = adressBar.get("productId");

console.log('ProductID', productId);

if(productId) {
  document.getElementsByTagName('h2')[0].innerHTML = 'BackOffice page - Modify Product';

  document.getElementById('save-button').innerText = 'Modify Product';

  let deleteBtn = document.getElementById('delete-button');
  deleteBtn.classList.remove('d-none');
  deleteBtn.addEventListener('click', () => {
    fetch(urlSite + productId, {
      'method': 'DELETE',
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNTBjNDg4Zjc0MDAwMTQyODc5ODEiLCJpYXQiOjE2ODM5NjI2MzIsImV4cCI6MTY4NTE3MjIzMn0.KW8Ppe_B0MqoQ-G5tlzlvkuk0JlmY0YoNgq8_9LLsdA"
    }
    })

    .then((res) => {
      if (res.ok) {
        alert('The elimination was successful')
        location.assign('Homepage.html')
      } else {
        throw new Error('There was a problem in the elimination of the product')
      }
    })
    .catch((err) => {
      console.log(err)
    })

  })

  fetch(urlSite + productId)
  .then((res) => {
    if (res.ok){
      return res.json()
    } else {
      throw new Error('There was an error in the fetching of the product')
    }
  })
  .then((product) => {
    console.log('Data of the selected product', product)

    document.getElementById('name').value = product.name;
    document.getElementById('brand').value = product.brand;
    document.getElementById('description').value = product.description;
    document.getElementById('price').value = product.price;
    document.getElementById('imageUrl').value = product.imageUrl;

  })
  .catch((error) => {
    console.log(error)
  })
} else {
  const productForm = document.getElementById('product-form');
  productForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Sending the product')

    let nameInput = document.getElementById('name');
    let brandInput = document.getElementById('brand');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');
    let imageInput = document.getElementById('imageUrl');

    let newProduct = {
      name: nameInput.value,
      brand: brandInput.value,
      description: descriptionInput.value,
      price: priceInput.value,
      imageUrl: imageInput.value,
    }

    console.log('Ready to sent the new product to the API', newProduct)
    
    fetch(productId ? urlSite + productId : urlSite, {
      'method': productId ? 'PUT' : 'POST',
      'body': JSON.stringify(newProduct),
      'headers': {
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNTBjNDg4Zjc0MDAwMTQyODc5ODEiLCJpYXQiOjE2ODM5NjI2MzIsImV4cCI6MTY4NTE3MjIzMn0.KW8Ppe_B0MqoQ-G5tlzlvkuk0JlmY0YoNgq8_9LLsdA',
        'Content-Type' : 'application/json',
      },
    })
    .then((res) => {
      console.log('Result', res)
      if (res.ok){
        alert(productId ? 'Product modified successfully' : 'Product added successfully')
        location.assign('Homepage.html')
      } else {
        alert('Error in creating the new product')
        throw new Error ('Product creation failed')
      }

    })
      .catch((err) =>{
        console.log(err)
      })
})

}



