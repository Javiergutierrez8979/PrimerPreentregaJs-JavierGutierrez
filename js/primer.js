
 /*consuta del nombre*/
let nombre = prompt('Por favor, ingrese su Nombre para continuar');

/* saludo*/
if (nombre == '') {
    alert('Debe escribir un nombre')
} else(
    alert('Bienvenido ' + (nombre) + " " + "a Vuelos Privados S.A")
);
/*consuta si desea comprar pasaje*/
let deseo = prompt("Desea viajar a alguno de nuestros destinos?" + " " + "(Responda si/no)")

while (deseo != "si" && deseo != "no") {
    alert ("Introduzca si o no");
    deseo = prompt("Desea viajar a alguno de nuestros destinos?" + " " + "(Responda si/no)")
};

/* destinos de la empresa */

let destinos = [
    {nombre:"Córdoba", precio: 1000}, 
    {nombre:"Mendoza", precio: 2000}, 
    {nombre:"Bariloche", precio: 3000}, 
    ];

/* aceptacion de hacer la compra */
if (deseo == "si") {
    alert ("Nuestros destinos son:  Cordoba, Bariloche y Mendoza");
    let eleccion = prompt("seleccione un destino deacuerdo a su numero de orden." + " " +"(0-Córdoba | 1-Mendoza | 2-Bariloche)");

   while ( eleccion >=3) {
        alert ("Elija una opcion valida,  0)Cordoba , 1)Bariloche 2)Mendoza")
        let eleccion = prompt("seleccione un destino deacuerdo a su numero de orden");


    }

    let destino = destinos[eleccion].nombre;
    let precio = destinos[eleccion].precio;
    let impuesto = 0.2
    let confirmacion = prompt( "Esta seguro que usted quiere viajar a" + " " + destino + "?" + "(Responda si/no)");

    if (confirmacion == "si") {
    console.log(precio);
    console.log(impuesto);

    /*funcion para el calculo del pasaje*/

    function CalculoTotal(precio, impuesto) {

        let total = (precio*impuesto) + precio
        alert( "El total de su pasaje con impuestos incluidos es de u$d" + " " +total )

        };

        CalculoTotal(precio,impuesto); 

    } else{
        alert ("Precione F5 para comenzar nuevamente")
    }

    let compra = prompt("confirma su compra ? ");

    if(compra == "si") {
        alert ("Felicidades! su compra por un pasaje a" + " " + destino + " fue realizada con exito")
    } else {
        alert ("precione F5 para comenzar nuevamente.")
    }



}  if(deseo == "no") {
    alert("Adios! vuelva pronto.");
};













