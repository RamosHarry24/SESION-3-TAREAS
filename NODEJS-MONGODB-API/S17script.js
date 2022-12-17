//const { response } = require("express")

function getUsers() {
    fetch('http://localhost:9000/api/users')
    .then((response) => response.json())
    .then((data) => console.log(data));
}


function getUserbyId(id) {
    fetch(`http://localhost:9000/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getUsers();

getUserbyId('639ce8e7b6bbe22202ae280d')