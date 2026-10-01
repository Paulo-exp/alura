let frutas = ['Pitanga', 'Maça', 'Banana', 'Cenoura', 'Cebola'];

function mostrarLista() {
    let texto = '';
    texto = texto + frutas[0] + '<br>';
    texto = texto + frutas[1] + '<br>';
    texto = texto + frutas[2] + '<br>';
    texto = texto + frutas[3] + '<br>';
    texto = texto + frutas[4];

    document.querySelector('#listaDeFrutas').innerHTML = texto;

}