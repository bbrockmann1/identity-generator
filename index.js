fetch('https://randomuser.me/api/')
.then(resp => resp.json())
.then(data => console.log(data))