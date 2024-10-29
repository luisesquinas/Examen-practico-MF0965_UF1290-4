document.addEventListener("DOMContentLoaded", () => {
    const registroNumero = document.getElementById("registroNumero");
    const numeroInput = document.getElementById("numero");
    const resultadoDiv = document.getElementById("resultado");
    
    // Cargar números desde el localStorage
    let numeros = JSON.parse(localStorage.getItem("numeros")) || []; // Carga los números o inicializa un arreglo vacío

    // Mostrar los números al cargar la página
    resultadoDiv.textContent = numeros.join(", ");

    registroNumero.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita el envío del formulario
        const numero = numeroInput.value.trim(); // Obtiene el valor del input

        if (numero) {
            // Agrega el número al arreglo
            numeros.push(numero);
            // Actualiza el resultado
            resultadoDiv.textContent = numeros.join(", "); // Muestra los números separados por comas
            
            // Guardar los números en el localStorage
            localStorage.setItem("numeros", JSON.stringify(numeros)); // Guarda el arreglo en localStorage
            
            numeroInput.value = ""; // Limpia el campo de entrada
        }
    });

    document.getElementById("resetearBtn").addEventListener("click", () => {
        numeros = []; // Resetea el arreglo
        resultadoDiv.textContent = ""; // Limpia el resultado
        localStorage.removeItem("numeros"); // Limpia el localStorage
    });
});