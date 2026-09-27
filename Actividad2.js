//Precio Menus
const MENUDIA = 12.5
const MENUPREMIUM = 17.45
const MENUBUFFET = 23.85
const MENUINFANTIL = 9.25

function menu() {
    /*
    El restaurante tiene 3 tipos de menús para adultos y uno para niños (menores de 10 años).
    Además, ofrece un descuento del 15% para los mayores de 65 años (que se aplica a los menús
    elegidos más económicos de adultos, INDEPENDIENTEMENTE de la edad).  */

    //Pedimos comensales
    let comensales = verificarNumero(undefined, "¿Con cuántos comensales vamos a contar?")

    //Preguntamos cuantos son mayores de 65
    let abuelitos = verificarNumero(undefined, "¿Cuántos comensales tenemos mayores de 65 años?")

    //Preguntamos cuantos son niños
    let niños = verificarNumero(undefined, "¿Cuántos comensales tenemos menores de 10 años con menú infantil?")

    //Comprobar que los comensales son correctos
    if ((niños + abuelitos) > comensales) {
        alert("Los comensales NO cuadran")
    }

    //Mostrar carta
    alert(`Estas son las opciones de menú para adultos... 
    1.- Menú del día --> ${MENUDIA}€
    2.- Menú del día PREMIUM --> ${MENUPREMIUM}€
    3.- Menú Buffet Libre --> ${MENUBUFFET}€
    NOTA: Todos los precios son sin IVA`)
    let adultos = comensales - niños
    let elegidoDia = 0
    let elegidoPremium = 0
    //Preguntar por menus 
    restaMenus(elegidoDia, elegidoPremium, adultos)
    elegidoDia = verificarNumero(undefined, "¿Cuántos comensales quieren el menú: \n 1.- Menú del día -->" + MENUDIA + "€ ")
    restaMenus(elegidoDia, elegidoPremium, adultos)
    elegidoPremium = verificarNumero(undefined, "¿Cuántos comensales quieren el menú: \n2.- Menú del día PREMIUM -->" + MENUPREMIUM + "€ ")
    let elegidoBuffet = adultos - elegidoDia - elegidoPremium

    //Mostrar elecciones
    alert(`Contamos con un total de ${comensales}: ${niños} niños y ${comensales - niños} adultos
        Los menús que se servirán serán los siguientes:
        ${elegidoDia} menú/s del día
        ${elegidoPremium} menú/s PREMIUM y 
        ${elegidoBuffet} menú/s Buffet Libre
        ${niños} menú/s infantil/es`)
    //Mostrar avisos
    alert(`Debe saber que ${abuelitos} menú/s se benificiaran de un 15% de descuento, respecto al menú de adultos por ser mayores de 65 años \nNOTA: El descuento será aplicado a los menús más económicos`)
    alert(`Los menús infantiles tienen un precio de ${MENUINFANTIL}€ + IVA \nEn su caso, se le aplicará este precio a ${niños} comensales`)


}

function restaMenus(elegidoDia, elegidoPremium, adultos) {
    let menusElegidos = elegidoDia + elegidoPremium
    let menusAElegir = adultos - menusElegidos
    alert("De momento llevas " + menusElegidos + " menús elegidos...\nTe quedan " + menusAElegir)
}

function verificarNumero(numero, mensaje) {
    numero = parseInt(prompt(mensaje))
    while (isNaN(numero)) {
        alert("Debe de ser un número")
        numero = parseInt(prompt(mensaje))
    }
    return numero
}

menu()