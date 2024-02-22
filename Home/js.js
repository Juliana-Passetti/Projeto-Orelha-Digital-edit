/*menu side*/

var header = document.getElementById('header');
var navHeader = document.getElementById('nav__header');
var content = document.getElementById('conteudo');
var mostrarBarra = false;

function puxarBarra() {

    mostrarBarra = !mostrarBarra;

    if (mostrarBarra) {
        navHeader.style.marginLeft = '-10vw';
        navHeader.style.animationName = 'mostrarBarra';
        content.style.filter = 'blur(2px)'
    }
    else {
        navHeader.style.marginLeft = '-100vw';
        navHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function fecharBarra() {
    if (mostrarBarra) {
        puxarBarra();
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 768 && mostrarBarra)
        puxarBarra();
});

/* teste lista*/

function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.id !== dropdownId) {
            openDropdown.classList.remove("show");
        }
    }
    dropdownContent.classList.toggle("show");
}

// Fechar o dropdown se o usuário clicar fora dele
window.onclick = function (event) {
    if (!event.target.matches('.nav__header__link')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}