const api = "https://randomuser.me/api/"


function fetchRandomUser(url){
    document.querySelector("#submitButton").onclick = () => {
        const fetch1 = fetch(url)
        .then(resp => resp.json());
        const fetch2 = fetch(url)
        .then(resp => resp.json());
        const fetch3 = fetch(url)
        .then(resp => resp.json());
        const fetch4 = fetch(url)
        .then(resp => resp.json());

        Promise.all([fetch1, fetch2, fetch3, fetch4])
        .then(fetchArray => {
            fetchArray.forEach(createUserCard);
        })
    }
}

document.querySelector('#clearUsers').onclick = () => {
    document.querySelectorAll(".userCards").forEach(card => card.remove())
}

document.querySelector('#submitSeed').addEventListener('submit', e => fetchSeedUser(e))

function fetchSeedUser(event){
    event.preventDefault()
    fetch(`https://randomuser.me/api/?seed=${event.target.seedInput.value}`)
    .then(res => res.json())
    .then(data => createUserCard(data))
}

function createUserCard(data){

    const cardDiv = document.getElementById('listContainer')
    const userCard = document.createElement('div')
    userCard.className = 'userCards'

    const createImg = document.createElement('img');
    const createName = document.createElement('h3');
    const createEmail = document.createElement('h3');
    const createUsername = document.createElement('h3');
    const createDOB = document.createElement('h3');
    const createNumber = document.createElement('h3');
    const createAddress = document.createElement('h3');
    const createSeed = document.createElement('h4')
    const createRemoveButton = document.createElement('button')
    createRemoveButton.className = 'removeButton'

    createImg.src = data.results[0].picture.large;
    createName.textContent = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
    createEmail.textContent = `Email:\n${data.results[0].email}`;
    createUsername.textContent = `Username:\n${data.results[0].login.username}`;
    createDOB.textContent = `Age: ${data.results[0].dob.age}\nDOB: ${data.results[0].dob.date.substring(0,10)}`;
    createNumber.textContent = `Phone Number:\n${data.results[0].phone}`;
    createAddress.textContent = `Address:\n${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}, ${data.results[0].location.postcode}`;
    createSeed.textContent = `Seed: \n${data.info.seed}`
    createRemoveButton.textContent = 'X'
    
    createRemoveButton.style.cursor = 'pointer';
    createRemoveButton.style.width = '25px';
    createRemoveButton.style.height = '25px';
    createRemoveButton.style.background = 'white';
    createRemoveButton.style.fontWeight = 'bold'
    createRemoveButton.style.float = 'right';
    createRemoveButton.style.borderLeft = 'solid';
    createRemoveButton.style.borderBottom = 'solid';


    createRemoveButton.onclick = e => e.target.parentNode.remove()

    userCard.append(createRemoveButton, createImg, createName, createEmail, createUsername, createDOB, createNumber, createAddress,  createSeed)
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