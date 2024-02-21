/*menu side*/

var header = document.getElementById('header');
var navHeader = document.getElementById('nav__header');
var content = document.getElementById('conteudo');
var mostrarBarra = false;

function puxarBarra() {

    mostrarBarra = !mostrarBarra;

    if (mostrarBarra) {
        navHeader.style.marginLeft = '-100vw';
    }
    else {
        navHeader.style.marginLeft = '-10vw';
    }
}