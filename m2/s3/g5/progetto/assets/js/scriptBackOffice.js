const AGENDA_URL = 'https://striveschool-api.herokuapp.com/api/agenda/'

let addressBarContent = new URLSearchParams(window.location.search)

let eventId = addressBarContent.get('eventId')

console.log('EVENTID', eventId)

if (eventId) {


  document.getElementsByTagName('h2')[0].innerText =
    'Backoffice page - Modifica evento'

  document.getElementById('save-button').innerText = 'MODIFICA EVENTO'

  let deleteButton = document.getElementById('delete-button')
  deleteButton.classList.remove('d-none')
  deleteButton.addEventListener('click', () => {
    fetch(AGENDA_URL + eventId, {
      method: 'DELETE',

    })
      .then((res) => {
        if (res.ok) {
          alert('eliminazione completata con successo')
          location.assign('./index.html')
        } else {
          throw new Error("Problema nell'eliminazione dell'evento")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })



  fetch(AGENDA_URL + eventId)

    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("Errore nel recupero dell'evento")
      }
    })
    .then((event) => {
      console.log(
        'DATI DEL SINGOLO EVENTO, RECUPERATO TRAMITE GET SINGOLA',
        event
      )

      document.getElementById('name').value = event.name
      document.getElementById('description').value = event.description
      document.getElementById('price').value = event.price
      document.getElementById('time').value = event.time.split('.000Z')[0] // trucchetto per ripopolare correttamente un input date
    })
    .catch((error) => {
      console.log(error)
    })
} else {

}


const eventForm = document.getElementById('event-form')
eventForm.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('invio i dati')

  let nameInput = document.getElementById('name')
  let descriptionInput = document.getElementById('description')
  let priceInput = document.getElementById('price')
  let timeInput = document.getElementById('time')


  let newEvent = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    time: timeInput.value,
  }
  console.log('evento pronto da inviare alle API', newEvent)


  fetch(eventId ? AGENDA_URL + eventId : AGENDA_URL, {

    method: eventId ? 'PUT' : 'POST',
    body: JSON.stringify(newEvent), 
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNTBjNDg4Zjc0MDAwMTQyODc5ODEiLCJpYXQiOjE2ODM5NjI2MzIsImV4cCI6MTY4NTE3MjIzMn0.KW8Ppe_B0MqoQ-G5tlzlvkuk0JlmY0YoNgq8_9LLsdA",
        'Content-Type': 'application/json',
    },
  })
    .then((res) => {

      console.log('RESPONSE DELLA CHIAMATA POST', res)
      if (res.ok) {

        alert(eventId ? 'EVENTO MODIFICATO!' : 'EVENTO CREATO!')
        location.assign('/index.html')
      } else {

        alert('ERRORE NEL SALVATAGGIO')
        throw new Error('ERRORE NEL SALVATAGGIO')
      }
    })
    .catch((err) => {
      console.log(err)
    })
})
