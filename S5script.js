// Creando elementos HTML desde JS
const $root = document.getElementById('root');

const $form = document.createElement('form');

// LABEL
const $labelnombre = document.createElement('label');
$labelnombre.setAttribute('for','nombre');
$labelnombre.textContent = 'Nombre';
$form.append($labelnombre);   

const $inputnombre = document.createElement('input');
$inputnombre.setAttribute('type','text')
$inputnombre.setAttribute('name','nombre')
$inputnombre.setAttribute('id','nombre')
$form.append($inputnombre)

const $labelapellido = document.createElement('label');
$labelapellido.setAttribute('for','apellido');
$labelapellido.textContent = 'Apellido';

$form.append($labelapellido)

const $inputapellido = document.createElement('input');
$inputapellido.setAttribute('type','text')
$inputapellido.setAttribute('name','apellido')
$inputapellido.setAttribute('id','apellido')
$form.append($inputapellido)


const $labelhoras = document.createElement('label');
$labelhoras.setAttribute('for', 'horas');
$labelhoras.textContent = 'Cantidad de Horas';
$form.append($labelhoras)

const $inputhoras = document.createElement('input');
$inputhoras.setAttribute('type', 'number');
$inputhoras.setAttribute('name', 'numero');
$inputhoras.setAttribute('id', 'horas');
$form.append($inputhoras)


const $labelcategoria = document.createElement('label');
$labelcategoria.textContent = 'Elige tu categoria:'
$form.append($labelcategoria)

const $inputcategoria1 = document.createElement('input');
const $textoRadio1 = document.createElement('span');
$textoRadio1.textContent = 'A';
$inputcategoria1.setAttribute('type', 'radio')
$inputcategoria1.setAttribute('name', 'categoria')
$inputcategoria1.setAttribute('value', '40')
$form.append($inputcategoria1)
$form.append($textoRadio1)

const $inputcategoria2 = document.createElement('input');
const $textoRadio2 = document.createElement('span');
$textoRadio2.textContent = 'B';
$inputcategoria2.setAttribute('type', 'radio')
$inputcategoria2.setAttribute('name', 'categoria')
$inputcategoria2.setAttribute('value', '35')
$form.append($inputcategoria2)
$form.append($textoRadio2)

const $inputcategoria3 = document.createElement('input');
const $textoRadio3 = document.createElement('span');
$textoRadio3.textContent = 'C';
$inputcategoria3.setAttribute('type', 'radio')
$inputcategoria3.setAttribute('name', 'categoria')
$inputcategoria3.setAttribute('value', '30')
$form.append($inputcategoria3)
$form.append($textoRadio3)

const $labelanios = document.createElement('label');
$labelanios.textContent = 'Elige tus años de servicio';
$form.append($labelanios)

const $radioanios1 = document.createElement('input');
const $textoAnio1 = document.createElement('span');
$textoAnio1.textContent = '1 - 3 años'
$radioanios1.setAttribute('type', 'radio')
$radioanios1.setAttribute('name', 'anios')
$radioanios1.setAttribute('value', '0.15')
$form.append($radioanios1)
$form.append($textoAnio1)

const $radioanios2 = document.createElement('input');
const $textoAnio2 = document.createElement('span');
$textoAnio2.textContent = '4 - 7 años'
$radioanios2.setAttribute('type', 'radio')
$radioanios2.setAttribute('name', 'anios')
$radioanios2.setAttribute('value', '0.2')
$form.append($radioanios2)
$form.append($textoAnio2)

const $radioanios3 = document.createElement('input');
const $textoAnio3 = document.createElement('span');
$textoAnio3.textContent = '8 - 12 años'
$radioanios3.setAttribute('type', 'radio')
$radioanios3.setAttribute('name', 'anios')
$radioanios3.setAttribute('value', '0.3')
$form.append($radioanios3)
$form.append($textoAnio3)

const $radioanios4 = document.createElement('input');
const $textoAnio4 = document.createElement('span');
$textoAnio4.textContent = '13 años a más...'
$radioanios4.setAttribute('type', 'radio')
$radioanios4.setAttribute('name', 'anios')
$radioanios4.setAttribute('value', '0.35')
$form.append($radioanios4)
$form.append($textoAnio4)

const $btnsubmit = document.createElement('button');
$btnsubmit.textContent = 'Enviar'
// $btnsubmit.setAttribute('type','submit')
$form.append($btnsubmit)

$root.append($form)