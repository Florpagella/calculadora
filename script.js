const pantalla = document.querySelector(".pantalla");
const btns = document.querySelectorAll(".btn");

btns.forEach((button) => {
    button.addEventListener("click", () =>{
        const botonApretado = button.textContent;

        if (button.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        if (button.id === "borrar"){
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            }else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })

});

