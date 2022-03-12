//código del cuadrado
console.group("cuadrados");
jj
function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}
perimetroCuadrado();

function areaCuadrado (ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}
areaCuadrado();
console.groupEnd();

// código del triángulo
console.group("triangulos");
function perimetroTriangulo (ladoTriangulo1,ladoTriangulo2,baseTriangulo) {
   
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(ladoTriangulo1,baseTriangulo) {
    return (ladoTriangulo1 * baseTriangulo)/ 2;
}
areaTriangulo();
console.groupEnd();

//Código circulo 
console.group("Circulo");

const pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}
diametroCirculo();

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
perimetroCirculo();

function areaCirculo(radio) {
    return pi * (radio*radio);
}
areaCirculo();
console.groupEnd();

//Aquí interactuaremos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;   
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number (input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number (input2.value);
    const input3 = document.getElementById("InputBase");
    const value3 = Number (input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number (input1.value);
    const input3 = document.getElementById("InputBase");
    const value3 = Number (input3.value);
    const area = areaTriangulo(value1, value3);
    alert(area); 
}

function calcularDiametro() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

