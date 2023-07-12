window.addEventListener("load", ()=> {
    const display = document.querySelector(".visor");
    const teclado = document.getElementsByClassName("tecladobotones");

    const tecladoArray = Array.from(teclado);

    tecladoArray.forEach( (button) => {
       button.addEventListener("click", ()=> {
        console.log(button.innerHTML);
        calculadora(button, display);
       })
    })

});


function calculadora(button, display) {
    switch (button.innerHTML) {
        case "=":
            calcular(display);
            break;

        case "C":
            borrar(display);
            break;

        default:
            actualizar(display, button);
            break;

    }

}


function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}


function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = "";
    }

    display.innerHTML += button.innerHTML;

}


function borrar(display) {
    display.innerHTML = 0;
}

