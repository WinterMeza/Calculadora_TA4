//  Funcion para el ejericio 1
function convertiroctal() { //Convertir de octal a decimal
    var numeroctal = document.getElementById('octal').value;
    var numdecimal = parseInt(numeroctal, 8);
    alert("El resultado es: " + numdecimal);

}
//Funcion para el ejercicio 2
function calculadora() {
    //Ingreso de dos números
    var cuadro1 = parseInt(document.getElementById('cuadro1').value);
    var cuadro2 = parseInt(document.getElementById('cuadro2').value);
    for (winter = 1; winter <= 5; winter++) {
        if (winter == 1) { //Suma
            suma = cuadro1 + cuadro2;
            alert("El resultado de la suma es:\n" + suma); //Salida de la suma
        }
        if(winter == 2) { //Resta
            resta = cuadro1 - cuadro2;
            alert("El resultado de la resta es:\n" + resta); //Salida de la resta
        }
        if (winter== 3) { //Multiplicación
            producto = cuadro1 * cuadro2;
            alert("El resultado de la multiplicación es:\n" + producto); //Salida del producto
        }
        
        if (winter == 4) { //División
            divi = cuadro1 /cuadro2;
            cuadro2 != 0 ?
                divi = cuadro1 / cuadro2:
                alert("No se puede dividir entre 0");
                alert("El resultado de la división es:\n" + divi); //Salida de la división
        }
    }
}