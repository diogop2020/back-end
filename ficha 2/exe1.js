function ex1(){

    var p = 90
    var a = 1.50
    imc = (p / a)^2 

    if (imc< 18.5 ){
        console.log('Abaixo do Peso')
    } else if(imc >= 18.5 && imc<=25){
        console.log('Peso Normal')
    }else if (imc>25 && imc<= 30){
        console.log('Acima do Peso')
    } else if (imc>30){
        console.log('Obeso')
    }
}

ex1();