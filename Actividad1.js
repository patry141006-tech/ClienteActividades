function infinito() {
    let num = prompt("Indica un número: ")

    // Comprobaciones
    if (num == -1 || num == 1 || num > -1 && num < 1) {
        alert("El numero debe ser mayor o menor")
        return
    }
    if (isNaN(parseFloat(num))) {
        alert("Debe ser un numero")
        return
    }

    //Crear variables
    let pararBucle = true
    let cont = 0
    let numeroAMultiplicar = 0
    let resultado = 0
    while (pararBucle) {
        //Comprobar si es infinity para parar
        if (resultado === Infinity || resultado === -Infinity) {
            console.log(`El número de operaciones necesarias ha/n sido ${cont}`)
            pararBucle = false
        } else {
            //Si es la primera vuelta asignar num y sino resultado
            cont === 0 ? numeroAMultiplicar = num : numeroAMultiplicar = resultado
            //Hacer la multiplicación
            resultado = num * numeroAMultiplicar
            cont++
            console.log(`${num} x ${numeroAMultiplicar} es: ${resultado} `)
        }

    }

}
infinito()