const api = "https://randomuser.me/api/"


function fetchRandomUser(url){
    document.querySelector("#submitButton").onclick = e => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => createUserCard(data))
    }
}

function createUserCard(data){

    const cardDiv = document.getElementById('listContainer')
    const userCard = document.createElement('div')

    const createImg = document.createElement('img');
    const createName = document.createElement('h3');
    const createEmail = document.createElement('h3');
    const createUsername = document.createElement('h3');
    const createDOB = document.createElement('h3');
    const createNumber = document.createElement('h3');
    const createAddress = document.createElement('h3');

    // const seedBtn = document.createElement('button');
    // const seed = document.createElement('h3');

    createImg.src = data.results[0].picture.large;
    createName.textContent = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
    createEmail.textContent = `Email:\n${data.results[0].email}`;
    createUsername.textContent = `Username:\n${data.results[0].login.username}}`;
    createDOB.textContent = `Age: ${data.results[0].dob.age}\nDOB: ${data.results[0].dob.date.substring(0,10)}`;
    createNumber.textContent = `Phone Number:\n${data.results[0].phone}`;
    createAddress.textContent = `Address:\n${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}, ${data.results[0].location.postcode}`;
    
    // seedBtn.textContent = 'Generate Seed';
    // seedBtn.className = 'buttons'
    // seed.textContent = SEED;



    userCard.append(createImg, createName, createEmail, createUsername, createDOB, createNumber, createAddress)
    newFunction(userCard)
    cardDiv.append(userCard)
    


}


function newFunction(card){

    card.querySelectorAll('h3').forEach(piece => {
        piece.addEventListener("mouseenter", () => {
            const editButton = document.createElement('button')
            editButton.id = "editButton"
            editButton.textContent = "Edit"
            piece.appendChild(editButton)
            editButton.onclick = e => editFormCreation(e)
            
        }) 
    })
    card.querySelectorAll("h3").forEach( piece => {
        piece.addEventListener("mouseleave", e => {
            document.querySelector('#editButton').remove()
        })
    })
}

function editFormCreation(event) {
    let changesMade = document.createElement('form')

    let edits = document.createElement('input')
    edits.type = 'text'
    edits.id = 'myEdits'
    edits.placeholder = 'Edit Info' 

    let saveButton = document.createElement('input')
    saveButton.value = 'Save Changes'
    saveButton.type = 'submit'  

    changesMade.append(edits, saveButton)  
    event.target.appendChild(changesMade)

    changesMade.addEventListener('submit', e => {
      e.preventDefault();
      event.target.parentNode.textContent = `${e.target.myEdits.value}`
      e.target.remove()
    })
}



fetchRandomUser(api)
