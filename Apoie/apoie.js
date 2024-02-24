// Obtém a área de drop
var dropzone = document.querySelector('.dropzone');

// Adiciona event listeners para dragenter e dragleave
dropzone.addEventListener('dragenter', function (event) {
    event.preventDefault();
    event.stopPropagation();
    dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', function (event) {
    event.preventDefault();
    event.stopPropagation();
    dropzone.classList.remove('dragover');
});

// Adiciona event listeners para dragover e drop
dropzone.addEventListener('dragover', function (event) {
    event.preventDefault();
    event.stopPropagation();
});

dropzone.addEventListener('drop', function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Processa os arquivos aqui, se necessário
    var files = event.dataTransfer.files;
    console.log(files);

    dropzone.classList.remove('dragover');
});
