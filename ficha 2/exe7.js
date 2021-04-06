function ex7(altura){

    for (let j = 1; j <= altura; j++) {
        var linha="";
        for (let i = 0; i < j; i++) {
            linha+="*";
        }
        console.log(linha)
    }
}

ex7(10);