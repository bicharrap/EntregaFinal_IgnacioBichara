



function mostrarErrorCampo(campo) {
    Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Complete el campo ' + campo,
        confirmButtonText: 'Aceptar'
      });
}

function mostrarFormEnviado() {
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Gracias!',
        text: 'Sus datos fueron enviados correctamente!',
        showConfirmButton: false,
        background: '#ccc url(images/hamburguesa.webp)',
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
          rgba(255,255,255)
          url("images/bart.png")
          right top
          no-repeat
        `,
        timer: 3000
      });
}



function guardarDatos() {
    let campo_nombre = document.getElementById("nombre").value;
    let campo_email = document.getElementById("email").value;
    localStorage.setItem("datos_formulario", JSON.stringify({nombre:campo_nombre, email:campo_email}));
    console.log("Los datos del formulario se guardaron en la LocalStorage!");
}

function eliminarDatos() {
    localStorage.removeItem("datos_formulario");
    console.log("Los datos fueron eliminados!");
}

function validarFormulario() {
    let campo_nombre = document.getElementById("nombre").value;
    let campo_email = document.getElementById("email").value;

    if (campo_nombre.length == 0) {
        mostrarErrorCampo("Nombre");
        return false;
    }

    if (campo_email.length == 0) {
        mostrarErrorCampo("Email");
        return false;
    }

    guardarDatos();
    mostrarFormEnviado2();
}

function mostrarAlerta() {
     Swal.fire({
        title: '<strong>Curso de <u>Javascript</u></strong>',
        icon: 'error',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      }) 
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Gracias por tu aporte!',
        showConfirmButton: true,
        timer: 2000
      })
}


document.getElementById("boton_enviar").addEventListener("click", validarFormulario);