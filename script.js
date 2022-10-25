let mostrarOcultar = function(){
    console.log('Opcion 1')
    // document.querySelector('.password').type = 'text'
    
    let tipo = document.querySelector('.password').type
    if (tipo === 'text') {
        console.log('Es texto, cabiemoslo a password')
        document.querySelector('.password').type = 'password'
    } else {
        console.log('Es password, camiemoslo a text')
        document.querySelector('.password').type = 'text'
    }
}

let mostrarOcultar2 = function(){
    console.log('Opcion 2')
    // document.querySelector('.password').setAttribute('type','text')
    let tipo = document.querySelector('.password').type
    if (tipo === 'password') {
        console.log('Es password, tenemos que cambiarlo a text')
        document.querySelector('.password').setAttribute('type','text')
    } else {
        console.log('Es text, tenemos que pasarlo a password')
        document.querySelector('.password').setAttribute('type','password')
    }
}