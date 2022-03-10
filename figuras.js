//código del cuadrado
console.group("cuadrados");

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
function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
perimetroTriangulo();

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




