const urlSite = "https://striveschool-api.herokuapp.com/api/product/";

const getEvents = function () {
    // parte la fetch()
    fetch(urlSite, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNTBjNDg4Zjc0MDAwMTQyODc5ODEiLCJpYXQiOjE2ODM5NjI2MzIsImV4cCI6MTY4NTE3MjIzMn0.KW8Ppe_B0MqoQ-G5tlzlvkuk0JlmY0YoNgq8_9LLsdA"
    }})
      .then((res) => {
        console.log("RES", res)
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error")
        }
      })
      .then((data) => {
        console.log("EVENTI IN DB", data)
        data.forEach((event) => {
          let colTemplate = `
          <div class="col-12 col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">
                  ${event.description}
                </p>
                <p>${new Date(event.time).toLocaleDateString('it-IT')} - ${
            event.price
          }€</p>
                <a href="./backoffice.html?eventId=${
                  event._id
                }" class="btn btn-primary">MODIFICA</a>
              </div>
            </div>
          </div>
          `


          let rowReference = document.getElementById("events-container")
          rowReference.innerHTML += colTemplate 
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  window.onload = () => {

    getEvents()
  }



