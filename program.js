// Defino el bloque
function validarUsuario() {
    // console.log("Bienvenidos");
    let usuario_guardado =  "pedro";
    let clave_guardado = "123";
    // console.log(usuario_guardado);
    // console.log(clave_guardado);
    let usuario_ingresado = document.querySelector(".user").value;
    let clave_ingresado = document.querySelector(".password").value;
    // Aca comparamos el usuario y la clave
    if(usuario_guardado == usuario_ingresado & clave_guardado == clave_ingresado){
        document.querySelector(".mensaje_de_resultado").innerHTML = "Te dejo pasar el home banking de Cristian y de Julia"
    }else{
        document.querySelector(".mensaje_de_resultado").innerHTML = "No entras"
    }
     

}


// Aca uso el bloque

