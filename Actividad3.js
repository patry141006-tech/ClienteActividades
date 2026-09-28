function cambioBases() {
    let seguirJugando = true
    while (seguirJugando) {
        let numero = prompt("Pon el numero a pasar con prefijo: (0b, 0o u 0x)")
        while (numero === null || numero.trim() === "" || isNaN(Number(numero))) {
            alert("El numero no es correcto")
            numero = prompt("Pon el numero a pasar con prefijo: (0b, 0o u 0x)")
        }
        numero = numero.trim().toLowerCase()
        let prefijo = numero.slice(0, 2)

        switch (prefijo) {
            case "0b":
                alert(`El número ${numero} en binario corresponde a 
            --> ${Number(numero)} en decimal
            --> ${Number(numero).toString(8)} en octal
            --> ${Number(numero).toString(16)} en hexadecimal
            `)
                break
            case "0o":
                alert(`El número ${numero} en octal corresponde a 
            --> ${Number(numero)} en decimal
            --> ${Number(numero).toString(2)} en binario
            --> ${Number(numero).toString(16)} en hexadecimal
            `)
                break
            case "0x":
                alert(`El número ${numero} en hexadecimal corresponde a 
            --> ${Number(numero)} en decimal
            --> ${Number(numero).toString(8)} en octal
            --> ${Number(numero).toString(2)} en binario
            `)
                break
            default:
                alert(`El número ${numero} en decimal corresponde a 
            --> ${Number(numero).toString(2)} en binario
            --> ${Number(numero).toString(8)} en octal
            --> ${Number(numero).toString(16)} en hexadecimal
            `)
        }
        seguirJugando = confirm("Quieres hacer otra conversion?")
    }
}
