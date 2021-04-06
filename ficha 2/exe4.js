function ex4(){
    
    var frase = "qwertyuiopasdfghjklçzxcvbnm"
    var letra = "b"
    var i;
    var soma = 0

    for (i=0; i<frase.length; i++){
        if(frase[i] == letra){
            soma +=1
            console.log('a letra',letra,'aparece ->',soma,'vez')
        }
    }

}

ex4();