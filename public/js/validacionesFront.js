let campoNombre = document.querySelector("input#nombre");
let campoPrecio = document.querySelector("input#precio");
let campoDescripcion = document.querySelector("input#descripcion");
let campoCantidad = document.querySelector("input#cantidad");
let campoImagen = document.querySelector("input#subir-img");
let campoCategoria = document.querySelector("input#categoria");
let campoSubcategoria = document.querySelector("input#subcategoria");

campoNombre.focus();
let formulario = document.querySelector("form");

arrayInput = [campoNombre, campoPrecio, campoDescripcion, campoCantidad, campoImagen, campoCategoria, campoSubcategoria];

formulario.addEventListener("submit", function (e) {
    let errores = 0;
    arrayInput.forEach(function (input) {
        if (input.value.length == 0) {
            input.classList.add("esInvalido");
            errores++;

        }

        if (input.value != 0) {
            input.classList.remove("esInvalido");
        }

        if (errores > 0) {
            e.preventDefault();
        }

    })

    


})
arrayInput.forEach(function (input) {
    input.addEventListener("blur", function () {
        if (input.value == "") { }
        input.classList.add("esInvalido")
        if (input.value !="") {
            input.classList.remove("esInvalido")
         }
    })
    
    
})



