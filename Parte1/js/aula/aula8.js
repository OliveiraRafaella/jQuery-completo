/***********AULA5*************SELETORES DE ATRIBUTOS************* */

$(document).ready(function(){
    //$("a[name=menu]") // valor para o atributo
    //$("a[name=menu]") // atributo
    //$("a[href*=min]") //procura o atributo que contem palavra min
    $("a[href$=js]") //busca elemento que termine com o valor 
    .css("background", "#ccc");
});