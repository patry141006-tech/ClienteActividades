//Precio Menus
const PRECIO_MENU_DIA = 12.5
const PRECIO_MENU_PREMIUM = 17.45
const PRECIO_MENU_BUFFET = 23.85
const PRECIO_MENU_INFANTIL = 9.25
//Descuento
const DESCUENTO = 0.15
//Nombre de los menus
const MENU_DIA = "MENU_DIA"
const MENU_PREMIUM = "MENU_PREMIUM"
const MENU_BUFFET = "MENU_BUFFET"
//Arrays para aplicar descuento
let menu_precios = []
let menu_tipos = []

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
    1.- Menú del día --> ${PRECIO_MENU_DIA}€
    2.- Menú del día PREMIUM --> ${PRECIO_MENU_PREMIUM}€
    3.- Menú Buffet Libre --> ${PRECIO_MENU_BUFFET}€
    NOTA: Todos los precios son sin IVA`)
    let adultos = comensales - niños
    //Inicializamos variables
    let elegidoDia = 0
    let elegidoPremium = 0

    //Preguntar por menus 
    restaMenus(elegidoDia, elegidoPremium, adultos)
    elegidoDia = verificarNumero(undefined, "¿Cuántos comensales quieren el menú: \n 1.- Menú del día -->" + PRECIO_MENU_DIA + "€ ")
    restaMenus(elegidoDia, elegidoPremium, adultos)
    elegidoPremium = verificarNumero(undefined, "¿Cuántos comensales quieren el menú: \n2.- Menú del día PREMIUM -->" + PRECIO_MENU_PREMIUM + "€ ")
    //No preguntamos por buffet porque lo damos por hecho 
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
    alert(`Los menús infantiles tienen un precio de ${PRECIO_MENU_INFANTIL}€ + IVA \nEn su caso, se le aplicará este precio a ${niños} comensales`)
    //Añadimos a los arrays de menor a mayor cuantos menus de cada hay
    añadirMenus(PRECIO_MENU_DIA, elegidoDia, MENU_DIA)
    añadirMenus(PRECIO_MENU_PREMIUM, elegidoPremium, MENU_PREMIUM)
    añadirMenus(PRECIO_MENU_BUFFET, elegidoBuffet, MENU_BUFFET)
    //Aplicamos el descuento 
    for (let i = 0; i < abuelitos; i++) {
        let descuento = menu_precios[i] * 0.15
        menu_precios[i] = menu_precios[i] - descuento
    }
    //Calculamos el precio total de cada menu
    let totalDia = calcularTotalPorTipo(MENU_DIA)
    let totalPremium = calcularTotalPorTipo(MENU_PREMIUM)
    let totalBuffet = calcularTotalPorTipo(MENU_BUFFET)
    //Total sin iva
    let total = totalDia + totalPremium + totalBuffet + (PRECIO_MENU_INFANTIL * niños)
    let iva= total *0.1
    alert(`Los menús que se servirán serán los siguientes:
        ${elegidoDia} menú/s del día x ${PRECIO_MENU_DIA}€ ...${totalDia.toFixed(2)}
        ${elegidoPremium} menú/s PREMIUM x ${PRECIO_MENU_PREMIUM}€ ...${totalPremium.toFixed(2)}
        ${elegidoBuffet} menú/s Buffet x ${PRECIO_MENU_BUFFET}€ ...${totalBuffet.toFixed(2)}
        ${niños} menú/s infantil x ${PRECIO_MENU_INFANTIL}€ ...${(PRECIO_MENU_INFANTIL * niños).toFixed(2)}
        Total.......${total.toFixed(2)}
        IVA.......${iva.toFixed(2)}
        TOTAL IVA INCLUIDO.....${(total + iva).toPrecision(10)}`)
        menu_precios=[]
        menu_tipos=[]
    }

function calcularTotalPorTipo(tipo) {
    //Creamos un bucle que en el array de tipos verifique si en la posicion i es el tipo de menu que coge la funcion
    //y lo suma a totaltipo para devolverlo
    let totalTipo = 0
    for (let i = 0; i < menu_precios.length; i++) {
        if (menu_tipos[i] === tipo) {
            totalTipo += menu_precios[i]
        }
    }
    return totalTipo
}

function restaMenus(elegidoDia, elegidoPremium, adultos) {
    //Muestra cuantos menús llevas y cuantos quedan
    let menusElegidos = elegidoDia + elegidoPremium
    let menusAElegir = adultos - menusElegidos
    alert("De momento llevas " + menusElegidos + " menús elegidos...\nTe quedan " + menusAElegir)
}

function verificarNumero(numero, mensaje) {
    //Verificar si el numero es numero
    numero = parseInt(prompt(mensaje))
    while (isNaN(numero)) {
        alert("Debe de ser un número")
        numero = parseInt(prompt(mensaje))
    }
    return numero
}

function añadirMenus(precio, cantidad, tipo) {
    //Agregar el tipo y el precio a los arrays conrespondientes
    if (cantidad != 0) {
        for (let i = 0; i < cantidad; i++) {
            menu_precios[menu_precios.length] = precio
            menu_tipos[menu_tipos.length] = tipo
        }
    }
}
