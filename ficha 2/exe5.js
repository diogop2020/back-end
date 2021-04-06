
function ex5(){

    var t_empregado = 9
    var horas_empresas = 0;
    var horas_trabalhadas = 0; 
    var abre = 8
    var fecha = 18
    horas_empresas = fecha - abre
    console.log('A empresa etá aberta',horas_empresas)

    if (t_empregado < abre && t_empregado > fecha){
        horas_trabalhadas = horas_empresas - t_empregado
    } else {
        console.log('Empresa Fechada')
    }
    

    
    console.log(horas_trabalhadas)
}

ex5();


// var t_empregado = (03,00,00)
// var horas_empresas = 0;
// var horas_trabalhadas = 0; 
// var abre = (08,00,00);
// var fecha = (18,00,00);