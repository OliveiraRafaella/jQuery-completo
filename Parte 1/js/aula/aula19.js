/***********AULA5*************EVENTOS AVANÇADOS************* */

$(document).ready(function(){
    $("span:eq(0)").click(function(){
        //$("div").hide(); //esconde elemento
        //$("div").hide("normal"); //normal,fast,slow (variações hide)
        $("div").hide(1000); //em mili segundos
    });

    $("span:eq(1)").click(function(){
        //$("div").show(); //esconde elemento
        //$("div").show("normal"); //normal,fast,slow (variações hide)
        $("div").show(1000); //em mili segundos
    });

    $("span:eq(2)").click(function(){
        //$("div").toggle(); //esconde elemento
        //$("div").toggle("normal"); //normal,fast,slow (variações hide)
        $("div").toggle(1000); //em mili segundos
    });    
});