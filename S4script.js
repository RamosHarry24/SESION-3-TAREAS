//PROFESOR ESTOS EJERCICIOS ESTAN EN LA SESION3-S3 PERO LO PONGO ACA PARA TENERLO SEPARADO. ESPERO COMPRENDA, GRACIAS.

// let users = [
//     {nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer"},
//     {nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor"},
//     {nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico"},
//     {nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador"},
//     {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
//     {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
// ]
 
//6. Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:
// Ejemplo: "Andres Soto tiene 28 años y es profesor"
 
// for(const index in users){
//     let nombre = users[index].nombre
//     let apellido = users[index].apellido
//     let edad = users[index].edad
//     let profesion = users[index].profesion
 
//     let frase = `${nombre} ${apellido} tiene ${edad} años y es ${profesion}`
//     document.write(frase)
//     document.write("<br>")
// }
 
//7. Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista
// ordenada.
 
 // function ordenar(parametro){
    //     if (typeof users[parametro] === "number"){
    //         return users.sort((a,b) => a[parametro]-b[parametro])
    //     } else {
    //         return users.sort((a,b) => a[parametro].localeCompare(b[parametro]))
    //     }
    // }
 
//8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click mande una alerta que diga: "De acuerdo!"

// const root = document.getElementById("root")
// const boton = document.createElement("button")
// boton.textContent = "Aceptar"
// boton.addEventListener("click",() => {
//     alert("De Acuerdo!")
// })

// root.append(boton)

// function mialerta() {  
//     alert("¡De acuerdo!");
// } 

//9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, el boton desaparezca.
// boton.addEventListener("mouseover", () =>{
//     boton.style.display = "none"
// })
// boton.addEventListener("mouseout", () =>{
//     boton.style.display = "none"
// })