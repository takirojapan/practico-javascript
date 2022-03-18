function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista1 = sumaLista/lista.length;
    return promedioLista1;
}

const lista1 = [
    100,
    200,
    500,
    4000000,
];
const mitadLista1 = parseInt(lista1.length /2);
let mediana;
if (lista1.length % 2 == 0) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica(
        [elemento1,
        elemento2,]
    );
    mediana = promedioElemento1y2;
    

}
else {
    mediana = lista1[mitadLista1];
} 

