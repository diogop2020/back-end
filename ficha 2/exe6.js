function ex6(largura,altura){

    for (let j = 0; j < altura; j++) {
        var linha="";
        for (let i = 0; i < largura; i++) {
            linha+="*";
        }
        console.log(linha)
    }
}

ex6(20,10);