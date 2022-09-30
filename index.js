const api = "https://randomuser.me/api/"

function fetchRandomUser(url){
    document.querySelector("#submitButton").onclick = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => createUserCard(data))
    }
}

function createUserCard(data){
    const userCard = document.createElement('div')
    userCard.className = "userCard"
    userCard.innerHTML = `
    <img src="${data.results[0].picture.large}">
    <li>
    <p>${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</p>
    <p>${data.results[0].gender}</p>
    <p>${data.results[0].dob.date} Age:${data.results[0].dob.age}</p>
    <p>${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}, ${data.results[0].location.postcode}</p>
    <p>${data.results[0].email}</p>
    <p>${data.results[0].phone}</p>
    <p>${data.results[0].login.username}</p>
    </li>`
    document.querySelector("#userCards").append(userCard)
    }


fetchRandomUser(api)