//PROFESOR ESTOS EJERCICIOS ESTAN EN LA SESION3-S3 PERO LO PONGO ACA PARA TENERLO SEPARADO. ESPERO COMPRENDA, GRACIAS.
//ACTULIZACION : ADD EJERCICIOS FALTANTES

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

//10. Crear una funcion que te permita ingresar en un prompt la informacion de un usuario de la siguiente manera:
// "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)"
// El usuario digitara: Andres, Perez, 28, ingeniero.
// La informacion debe ser guardada como objeto dentro del array users asignadole un id unico a cada registro.
 
//11. Utilizando el objeto Date, añadir la propiedad created_date de manera interna en donde se registre el
// momento en que ese registro fue creado.
//10 y 11

// let users = [];
// let idUse = 0;

// function informacion() {
//   const info = prompt("ingrese su: nombre, apellido, edad, profesion");
//   let dato = info.split(", ");
//   //   let fecha = new Date();
//   let objeto = {
//     id: idUse,
//     nombre: dato[0],
//     apellido: dato[1],
//     edad: dato[2],
//     profesion: dato[3],
//     fechaCreada: new Date(año, mes, fecha)
//   };
//   idUse++;
//   users.push(objeto);
//   console.log(objeto);
// }

// informacion();


//12.
 
let usuarios = [
    {
      id: 1,
      nombre: "Andres",
      apellido: "Pacheco",
      edad: 38,
      profesion: "developer",
      created_at: new Date("2022-09-26T06:25:21.118Z"),
    },
    {
      id: 2,
      nombre: "Andrea",
      apellido: "Sanchez",
      edad: 25,
      profesion: "profesor",
      created_at: new Date("2022-04-18T14:14:32.879Z"),
    },
    {
      id: 3,
      nombre: "Julia",
      apellido: "Ochoa",
      edad: 32,
      profesion: "musico",
      created_at: new Date("2021-12-14T11:53:38.279Z"),
    },
    {
      id: 4,
      nombre: "Samuel",
      apellido: "Martinez",
      edad: 29,
      profesion: "programador",
      created_at: new Date("2022-01-26T03:31:15.202Z"),
    },
    {
      id: 5,
      nombre: "Roberto",
      apellido: "Mattos",
      edad: 40,
      profesion: "chef",
      created_at: new Date("2022-07-27T02:06:22.760Z"),
    },
    {
      id: 6,
      nombre: "Mercedes",
      apellido: "Sanchez",
      edad: 35,
      profesion: "veterinario",
      created_at: new Date("2022-05-01T22:06:35.864Z"),
    },
];

// function fechaOrdenada(usuarios) {
//     const orderUsuario = usuarios
//       .slice()
//       .sort((a, b) => b.created_at - a.created_at);
//     console.log(orderUsuario);
//   //la linea 222 es para ordenar de mayor a menor
//     //   orderUsuarioReversa = orderUsuario.reverse();  
//   }
//   fechaOrdenada(usuarios);
  


// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)
 

//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.

function filtrarfecha(usuarios) {
    let datedilter = usuarios.filter((a) => a.created_at === usuarios);
    let result = datedilter.length === 0 ? "fecha encontrada" : datedilter;
    console.log(result);
  } // no resuelta xd, va a ser subida al git




//14. Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:
// CREATE
// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10.
 
// READ
// El admin debe poder visualizar en pantalla los registros que estan siendo creados.
 
// UPDATE
// El admin, al presionar un boton: "Modificar registro" en la parte inferior de la lista de registros, debe
// ver un prompt que le pida que ingrese el id del registro que desea modificar, en caso no ingrese ninguno,
// debe volver a la pagina inicial. Si elige modificar alguno, debe aparecer nuevamente el prompt del ejercicio 10
// OJO: Cuando el admin modifique el registro, no se debe modificar la fecha de creacion, en su lugar debe aparecer
// un nuevo campo de fecha de modificacion.
 
// DELETE
// El admin, al presionar un boton: "Borrar registro" en la parte inferior de la lista de registros, debe ver
// un prompt que le pida ingresar el id del registro que desea borrar. Al dar click, debe aparecer un prompt
// que le pregunte: "Esta usted seguro? Si/No" y al escribir Si, deberia borrarlo. En cualquier otro caso
// deberia volver a la pagina inicial sin que se haya borrado ningun registro.
 
// OPCIONAL1: Añadir a la tabla la funcionalidad de ordenar los registros al hacer click en los encabezados
// (como en el caso de Pokemon). Sin embargo, al momento de hacer click nuevamente en el encabezado, los datos
// deben ordenarse de manera inversa. Ejemplo: Si al hacer click se ordenan de menor a mayor, al volver a hacer
// click deben ordenarse de mayor a menor.
 
// OPCIONAL2: Crear un selector que permita filtrar los datos por fecha.
 
