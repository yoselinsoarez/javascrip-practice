console.log("Ejercicio de variables")



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



