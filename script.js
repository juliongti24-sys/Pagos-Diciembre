
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
    
    let aguinaldo = calcularAguinaldo(meses, sueldo);
    resultado.innerText = "Has recibido un total de $" + aguinaldo+" pesos.";
    boton.click();

});

let calcularAguinaldo = (meses, sueldo) => {
    let bono; 
    let aguinaldo;
    if(meses  < 60){
        bono = meses / 12 * 2000;
        bono += meses % 12 * 100;
    }
    else{
        bono = 10000;
    }
    aguinaldo = bono + sueldo; 
    aguinaldo = aguinaldo.toFixed(2);
    return aguinaldo;
}