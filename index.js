console.log("Ejercicios")

//Ejercicios variables

/*Ejercicio 1 -
Declarar una variable llamada firstName;
En una linea aparte asignarle el valor Bubby;
Declarar una variable segundoNombre y asignarle el valor netti en la misma linea;
Declarar una variable nombreCompleto y como valor asignarle la suma de primerNombre y segundoNombre;

Mostrar en consola “El nombre completo es ….” (donde los puntos suspensivos son el nombre completo. Utilizar la variable correspondiente)*/

let firstName;
let primerNombre ="Bubby";
let segundoNombre ="Netti";
let nombreCompleto = primerNombre + " " + segundoNombre;

console.log(" El nombre completo es " , nombreCompleto );


/*Ejercicio 2 -

Declarar una variable llamada numeroTipoString y asignarle el valor de tipo STRING 7
Declarar otra variable llamada numero1y asignarle el valor de la variable numeroTipoString parseado.
Declarar una variable llamada numero2 y asignarle el valor 10;

Declarar una variable suma y asignarle el valor correspondiente a la suma de numero1 y numero2.

Mostrar en consola “El valor de la suma es…” (donde los puntos suspensivos son el valor de la suma. Utilizar la variable correspondiente)*/


let numeroTipoString="7";
let numero1= parseInt(numeroTipoString);
let numero2= 10;
let suma= numero1 + numero2;
console.log("El valor de la suma es" , suma);

/*Ejercicio 4 - 

Marilina Bertoldi hizo una gira por diferentes paises y se contabilizo cuanta gente la fue a ver por pais. 
Ahora quiere saber cuanta gente la vio en total, ya que tiene todos los datos necesarios para hacerlo.

Datos> 

Uruguay : 10000 personas
Argentina : 50000 personas
Chile: 20000
Paraguay: 30000

Declarar todas las variables necesarias para resolver el problema planteado.
Mostrar en consola “El total de la cantidad de gente que fue a ver a Marilina Bertoldi fue de…” (donde los puntos suspensivos son el valor de la suma. Utilizar la variable correspondiente).

Pensar: Y si quiero mostar en consola el desglose por pais, como deberia hacerlo?*/


let uruguay= 10000;
let argentina= 50000;
let chile= 20000;
let paraguay= 30000;
let sumaTotal= uruguay + argentina + chile + paraguay;
console.log("El total de personas que fue a ver a Marilina Bertoldi fue de " , sumaTotal);
console.log("La cantidad en Uruguay" , uruguay , "en Argentina" , argentina , "en Chile" , chile , "en Paraguay" , paraguay);


//Otra manera declara variables con espacios en blanco
let primerApellido= "Soarez";
let segundoApellido= "Fernandez";
let BLANCO = " ";
let apellidosSuma= primerApellido + BLANCO + segundoApellido;
console.log("Los apellidos completos son " , apellidosSuma);

let tercerApellido= "Sosa";
let cuartoApellido= "Vidal";
let sumaApellidos= tercerApellido + " " + cuartoApellido;
console.log("Los apellidos completos son " , sumaApellidos);


//Operaciones basicas
let year= 2020;
let nextDecade= year + 10
console.log("La proxima decada sera", nextDecade);


/*Ejercicio
Declara una variable que vamos a llamar: numeroEntero
En la siguiente instrucción (nueva línea en el script) asígnale el valor numérico: 1625
Luego, en la siguiente instrucción (nueva línea) se deberá mostrar el valor de dicha variable en el cuadro de resultados del editor con el siguiente texto: “El valor de numeroEntero es …..”  (en los puntos suspensivos debe aparecer el valor 1625)
Una vez visto el resultado del script, si ha sido correcto, incluye una línea, debajo de aquella en que asignaste el valor 1625, y en esta instrucción asigna el valor 375 a la variable numeroEntero. Comprueba que al ejecutar de nuevo el script muestra efectivamente ese nuevo valor
Por último, añade esta instrucción como última línea del código:
alert(numeroEntero + 125); y comprueba que al ejecutar el script te aparece un pop-up con el valor: 500*/



let numeroEntero
numeroEntero = 1625
console.log("El valor de numero entero es " + numeroEntero);
numeroEntero = 375 
alert(numeroEntero + 125)

//Ejercicios IF 
/*Ejercicio 1:

Quiero hacer un programa que me diga si una persona es mayor de edad.
Tomaremos como mayoría de edad los 18 años. 
Necesito que dada la edad ingresada por el usuario, si la persona tiene 18 años o más, se muestre un mensaje en consola diciendo “Es mayor”, de lo contrario, mostrar un mensaje que diga “Es menor”.

Escribir el código necesario para resolver este problema.*/

let edad = window.prompt("Cual es tu edad?");
let edadNumerica = parseInt(edad);

if (edadNumerica >= 18){
    alert("Es mayor");
} else {
    alert("Es menor");
}


/* Ejercicio 2: Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida
 cuanto le costará en función del topping que elija.

El helado sin topping cuesta 1.90€.
El topping de oreo cuesta 1€.
El topping de KitKat cuesta 1.50€.

En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping, lo sentimos. »
 y a continuación informar del precio del helado sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno). 

let topping = window.prompt("Que topping quieres?");
let precioHelado = 1.90;
let precioOreo = 1;
let precioKitKat = 1.5;
let precioTotal = 0;

if(topping == "oreo"){
    precioTotal = precioHelado + precioOreo;
} else if(topping == "kitkat"){
    precioTotal = precioHelado + precioKitKat;
} else {
    precioTotal = precioHelado;
    alert("no tenemos ese topping, lo siento");
}

alert("Debes pagar " + precioTotal); */


/*Ejercicio 3:
Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:

En caso afirmativo el usuario responderá si
En caso contrario responderá no.

Si el usuario responde si se escribirá en consola «irás a la cárcel».

Si el usuario responde no se escribirá en consola «irás a casa».

En cualquier otro caso se mostrará el mensaje  «la documentación por favor».*/

let culpable = window.prompt("¿Eres culpable? Si o NO");

if(culpable =="Si"){
    alert("Irás a la cárcel");
}else if(culpable=="no"){
    alert("Iras a casa");
}else {
    alert("La documentacion, porfavor")
}
















