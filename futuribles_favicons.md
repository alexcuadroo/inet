Paso 1: Identificar cada página
Agrega un atributo data-page al elemento body de cada página. Este atributo contendrá un valor único que identifica la página.

## html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/directorio/directorio/addFavicon.js"></script>
    <title>Tu Página</title>
</head>
<body data-page="home">
    <!-- Contenido de la página -->
</body>
</html>

Paso 2: Modificar el script addFavicon.js
Actualiza el script para que lea el atributo data-page y cargue el favicon correspondiente.

## javascript

(function() {
    // Obtenemos el valor del atributo data-page
    var page = document.body.getAttribute('data-page');
    
    // Definimos los favicons para cada página
    var favicons = {
        home: '/recursos/fav_home.webp',
        about: '/recursos/fav_about.webp',
        contact: '/recursos/fav_contact.webp',
        // Añadir más páginas y favicons según sea necesario
    };

    // Determinamos el favicon a usar basado en la página actual
    var faviconUrl = favicons[page] || '/recursos/fav_default.webp'; // Fallback a un favicon por defecto

    // Creamos el elemento link para el favicon
    var link = document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl;
    link.type = 'image/webp';

    // Añadimos el link al head del documento
    document.head.appendChild(link);
})();