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

    let pararBucle = true
    let cont = 0
    let numeroAMultiplicar = 0
    let resultado = 0
    while (pararBucle) {
        if (resultado === Infinity || resultado === -Infinity) {
            console.log(`El número de operaciones necesarias ha/n sido ${cont}`)
            pararBucle = false
        } else {
            cont === 0 ? numeroAMultiplicar = num : numeroAMultiplicar = resultado
            resultado = num * numeroAMultiplicar
            cont++
            console.log(`${num} x ${numeroAMultiplicar} es: ${resultado} `)
        }

    }

}
infinito()