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


function toggleSubcategorias(event) {
    event.stopPropagation(); // Evita que o evento de fechamento do dropdown principal seja acionado
    var subcategorias = event.target.nextElementSibling;
    subcategorias.style.display = (subcategorias.style.display === "block") ? "none" : "block";

    // Adiciona um ouvinte de eventos de clique no documento para fechar as subcategorias ao clicar fora
    document.addEventListener('click', function (e) {
        if (!subcategorias.contains(e.target)) {
            subcategorias.style.display = 'none';
        }
    });
}

$(document).ready(function () {
    $('.carrossel').slick({
        slidesToShow: 5, // Número de slides visíveis na tela
        slidesToScroll: 1, // Número de slides a rolar por vez
        autoplay: true, // Autoplay ativado
        autoplaySpeed: 3000, // Velocidade do autoplay (em milissegundos)
        arrows: true, // Setas de navegação ativadas
        prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Botão de navegação anterior
        nextArrow: '<button type="button" class="slick-next">Next</button>', // Botão de navegação seguinte
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2 // Altere o número de slides visíveis em dispositivos menores
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1 // Altere o número de slides visíveis em dispositivos ainda menores
                }
            }
        ]
    });
});