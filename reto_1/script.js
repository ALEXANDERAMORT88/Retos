alert("Cual es el numero Mayor");

let oneNumber = parseInt(prompt("Ingresa Numero 1:"));
let twoNumber = parseInt(prompt("Ingresa Numero 2:"));

if (oneNumber > twoNumber) {
    alert("el Numero mayor es: " + oneNumber);
} else {
    if(twoNumber > oneNumber){
        alert("el numero mayor es: " + twoNumber);
    }else{
        alert("Los numero son Iguales")
    }
};

