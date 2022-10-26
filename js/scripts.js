

document.getElementById("header").innerHTML = `
<a href="/index.html"><img src="/IMG/Sin título-51.png" alt="logo cienciamente"></a>
<h1 id="cinciaMente">CienciaMente</h1>
`
document.getElementById("footer").innerHTML = `
<a href=""><i class="fa-brands fa-instagram"></i></a>
<a href=""><i class="fa-brands fa-facebook"></i></a>
<a href=""><i class="fa-brands fa-twitter"></i></a>
<p>Derechos reservados @2022</p>
`

const menuNav = document.querySelector(".nav-links");
const button = document.getElementById("button-menu")
button.onclick = () => menuNav.classList.toggle('nav-show');

function valida_envia() {

    if (document.formContacto.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    if (document.formContacto.apellido.value.length == 0) {
        alert("Tiene que escribir su apellido")
        document.fvalida.apellido.focus()
        return 0;
    }

    edad = document.formContacto.edad.value
    edad = validarEntero(edad)
    document.formContacto.edad.value = edad
    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.")
        document.formContacto.edad.focus()
        return 0;
    } else {
        if (edad < 15) {
            alert("Debe ser mayor de 15 años.")
            document.formContacto.edad.focus()
            return 0;
        }
    }

    //valido el interés
    if (document.formContacto.horas.selectedIndex == 0) {
        alert("Debe indicar la disponibilidad horaria.")
        document.formContacto.horas.focus()
        return 0;
    }

    alert("Muchas gracias por enviar el formulario");
    document.formContacto.submit();
}

function validarEntero(valor) {
    valor = parseInt(valor)
    if (isNaN(valor)) {
        return ""
    }
    else {
        return valor
    }
}
