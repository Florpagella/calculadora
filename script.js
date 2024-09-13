const pantalla = document.getElementById('pantalla');

function agregar(valor) {
    pantalla.value += valor;
}

function borrar() {
    pantalla.value = '';
}