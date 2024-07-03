
//Definimos los datos correctos de acceso
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const usuario = urlParams.get('Usuario');
    const contrasena = urlParams.get('Contrasena');


    // Aquí puedes añadir la lógica de validación de usuario
    if (usuario === 'usuario1' && contrasena === '1234') {
        alert('Login exitoso');
        // Redirigir a otra página o realizar alguna acción
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuario o  incorrectos');
        //console.log('ko')
        window.location.href = 'index.html';
    }

});

