const api = "https://randomuser.me/api/?results=5"

function fetchRandomUser(url){
    document.querySelector("#submitButton").onclick = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => createUserCard(data))
    }
}

function createUserCard(data){
    let i = 0
    data.results.forEach( () => {
        const userCard = document.createElement('div')
        userCard.className = "userCard"
        userCard.innerHTML = `
        <img src="${data.results[i].picture.large}">
        <li class="eachUserInfoPiece">${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}</li>
        <li class="eachUserInfoPiece">${data.results[i].gender}</li>
        <li class="eachUserInfoPiece">${data.results[i].dob.date.substring(0, 10)} Age:${data.results[i].dob.age}</li>
        <li class="eachUserInfoPiece">${data.results[i].location.street.number} ${data.results[i].location.street.name}, ${data.results[i].location.city}, ${data.results[i].location.state}, ${data.results[i].location.country}, ${data.results[i].location.postcode}</li>
        <li class="eachUserInfoPiece">${data.results[i].email}</li>
        <li class="eachUserInfoPiece">${data.results[i].phone}</li>
        <li class="eachUserInfoPiece">${data.results[i].login.username}</li>
        `
        document.querySelector("#userCards").append(userCard)
        i++
        })
    document.querySelectorAll(".eachUserInfoPiece").forEach( piece => {
        piece.addEventListener("mouseenter", () => {
            const editButton = document.createElement('button')
            editButton.className = "editButton"
            editButton.textContent = "Edit"
            piece.appendChild(editButton)
        }) 
    })
    document.querySelectorAll(".eachUserInfoPiece").forEach( piece => {
        piece.addEventListener("mouseleave", e => {
            document.querySelector('.editButton').remove()
        })

    })
}

// function editUserInfo(task) {
//   let changesMade = document.createElement('form')


//   let edits = document.createElement('input')
//   edits.type = 'text'
//   edits.id = 'myEdits'
//   edits.placeholder = 'Edit Task'


//   let saveButton = document.createElement('input')
//   saveButton.value = 'Save Changes'
//   saveButton.type = 'submit'


//   changesMade.append(edits, saveButton)  
//   task.appendChild(changesMade)
  

//   changesMade.addEventListener('submit', e => {
//     e.preventDefault();
//     task.textContent = `${e.target.myEdits.value}`
//     e.target.remove()
//   })
  


// }

fetchRandomUser(api)