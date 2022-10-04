/***********AULA5*************SELETORES DE ORDEM************* */

$(document).ready(function(){
    //$("tbody tr") // marca todos
    //$("tbody tr:first") // marca primeiro
    //$("tbody tr:last") //marca ultima
    //$("tbody tr:not(tbody tr:last)") //marca todos com excessao da ultima tr
    //$("tbody tr:even") //ocoreencias pares
    //$("tbody tr:odd")//ocorrencias impares
    //$("tbody tr:eq(3)")//seleciona celula =3
    //$("tbody tr:gt(2)")//seleciona maiores que 2
    //$("tbody tr:lt(2)")//seleciona menor que 2
    $("tbody tr:animated")

    .css("background", "#ccc");
});