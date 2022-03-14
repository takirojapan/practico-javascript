
function calculoPrecio(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * (porcentajePrecioConDescuento - cuponesDescuento())/100;
    return precioConDescuento;

}

var cupones = ["eres_batman", "te_quiero_mucho", "solo_para_genios"];

function cuponesDescuento() {
    const inputCupon = document.getElementById("InputCupon"); //Asignamos a una variable el input del formulario
    const valueCupon = inputCupon.value; //Tomamos el valor del input formulario
    let descuentoCupon = "";
    switch (valueCupon) {
        case cupones[0]:
            descuentoCupon = 15;
        break;
        case cupones[1]:
            descuentoCupon = 25;
        break;
        case cupones[2]:
            descuentoCupon = 50;
        break;
    }
    return descuentoCupon;
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


