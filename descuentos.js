
function calculoPrecio(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;

}


function calcularDescuento(){
    const input = document.getElementById("InputPrice");
    const value = input.value;
    const input2 = document.getElementById("InputDiscount");
    const value2 = input2.value;
    const descuento = calculoPrecio(value,value2);
    const resulTP = document.getElementById("ResultP");
    resulTP.innerText = "El precio con el descuento es $ " + descuento;
}


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/


