// function ex11(maximo, minimo, media){
    var maximo = 0;
    var minimo = 0;
    var media = 0;
    var soma = 0;
    var sequencia = [1, 2, 3, 4, 5];
    var i = 0;

    for (i = 0; sequencia.length; 1){
        if(i >= maximo){
            maximo = 0;
        } else if (i <= minimo ) {
            minimo = i
        }
        soma = soma + i
    }
    for (i = 0; sequencia.length; 1){
        soma = soma + i
    }
    media = soma / 5
    console.log('o maximo é de ',maximo)
    console.log('o minimo é de ',minimo)
    console.log('a media é de ',media)
// }