
function abrirMenu(){
    alert("funciona")
    document.getElementById("header").classList.toggle("mostrar");
}

/*

e9ecef

*/

form = document.getElementById("formulario");
form.addEventListener('submit', function(e){
    e.preventDefault();
    let sueldo =parseFloat (document.getElementById("sueldo").value);
    let meses = parseInt(document.getElementById("meses").value);
    let resultado = document.getElementById("resultado");
    let boton = document.getElementById("boton");   
    
    let aguinaldo = calcularAguinaldo(sueldo, meses);
    resultado.innerText = "Has recibido un total de $" + aguinaldo+" pesos.";
    boton.click();

});

let calcularAguinaldo2 = (meses, sueldo) => {
    let bono; 
    let aguinaldo;
    if(meses  < 60 && meses >= 12){
        bono = meses / 12 * 2000;
        bono += meses % 12 * 100;
    }
    else if(meses < 12){
        bono = meses * 100;
    }
    else{
        bono = 10000;
    }
    aguinaldo = bono + sueldo; 
    aguinaldo = aguinaldo.toFixed(2);
    return aguinaldo;
}




let calcularAguinaldo = (sueldoBase, mesesTrabajados) => {
    // 1. Calcular los años completos y los meses sobrantes
    const añosCompletos = Math.floor(mesesTrabajados / 12);
    const mesesSobrantes = mesesTrabajados % 12;

    // 2. Calcular el bono por años completos
    let bonoPorAños = añosCompletos * 2000;

    // 3. Aplicar la restricción: el bono por años completos NO debe rebasar $10,000
    const BONO_MAXIMO_POR_AÑOS = 10000;
    if (bonoPorAños > BONO_MAXIMO_POR_AÑOS) {
        bonoPorAños = BONO_MAXIMO_POR_AÑOS;
    }

    // 4. Calcular el bono por meses sobrantes
    const bonoPorMeses = mesesSobrantes * 100;

    // 5. Calcular el total del aguinaldo (bono total)
    const totalAguinaldo = bonoPorAños + bonoPorMeses;

    // 6. Calcular el total a pagar (sueldo base + total aguinaldo)
    const totalAPagar = sueldoBase + totalAguinaldo;

    // 7. Retornar los resultados formateados
    return totalAPagar.toFixed(2);     // Sueldo base + totalAguinaldo
    
};
