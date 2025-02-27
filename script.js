let random = Math.random()*100
let numero = Math.floor(random)
//document.getElementById("numero").innerHTML = numero
function adivina(){
    let tunumero = parseInt(document.getElementById("display").value)
    if (tunumero > numero){
        document.getElementById("texto").innerHTML = "Tu numero es mas grande"
    }
    else if (tunumero < numero){
        document.getElementById("texto").innerHTML = "Tu numero es mas pequeño"
    }
    else if (tunumero == numero){
        document.getElementById("texto").innerHTML= "Acertaste"
    }
    else{
        document.getElementById("texto").innerHTML= "Eso no es un numero, prueba otra vez"
    }
}
function nuevo(){
    random = Math.random()*100
    numero = Math.floor(random)
    //document.getElementById("numero").innerHTML = numero
    document.getElementById("texto").innerHTML= " "
}