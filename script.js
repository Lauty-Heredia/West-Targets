    // Esperamos a que el DOM esté cargado
    document.addEventListener("DOMContentLoaded", function() {
        // Seleccionamos la imagen principal y las miniaturas
        const mainImage = document.getElementById('mainImage');
        const thumbnails = document.querySelectorAll('.thumb');

        // Iteramos sobre las miniaturas y agregamos un evento de clic
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Cambiamos el src de la imagen principal al de la miniatura
                mainImage.src = this.src;
            });
        });
    });