let random = Math.floor(Math.random() * 100);
        let intentos = 5;
        
        function adivina() {
            let tunumero = parseInt(document.getElementById("display").value);
            let mensaje = document.getElementById("texto");
            let contador = document.getElementById("intentos");
            
            if (isNaN(tunumero) || tunumero < 0 || tunumero > 99) {
                mensaje.innerHTML = "Por favor, introduce un número válido entre 0 y 99.";
                return;
            }
            
            intentos--;
            contador.innerHTML = `Intentos restantes: ${intentos}`;
            
            if (tunumero > random) {
                mensaje.innerHTML = "Tu número es demasiado grande.";
                mensaje.style.color = "red";
            } else if (tunumero < random) {
                mensaje.innerHTML = "Tu número es demasiado pequeño.";
                mensaje.style.color = "blue";
            } else {
                mensaje.innerHTML = "¡Felicidades! Has adivinado el número.";
                mensaje.style.color = "green";
                desactivar();
            }
            
            if (intentos === 0 && tunumero !== random) {
                mensaje.innerHTML = `Se acabaron los intentos. El número era ${random}.`;
                desactivar();
            }
        }
        
        function nuevo() {
            random = Math.floor(Math.random() * 100);
            intentos = 5;
            document.getElementById("texto").innerHTML = "";
            document.getElementById("intentos").innerHTML = "Intentos restantes: 5";
            document.getElementById("display").value = "";
            document.getElementById("display").disabled = false;
        }
        
        function desactivar() {
            document.getElementById("display").disabled = true;
        }