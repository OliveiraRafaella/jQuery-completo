/***********AULA5*************EFEITOS SLIDE CORREDIÇOS E OPACIDADE************* */

$(document).ready(function(){
    $("span:eq(0)").click(function(){
        //$("div").fadeOut(); //esconde elemento
        //$("div").fadeOut("normal"); //normal,fast,slow (variações fadeOut)
       /* $("div").fadeOut(2000); //em mili segundos

        $("div").fadeIn(2000); //em mili segundos

        $("div").fadeTo(2000,0.3); //nivel de opacidade(0-1)
        */
        $("div").fadeToggle(2000);
    });

    $("span:eq(1)").click(function(){
        //$("div").slideUp(); //esconde elemento
        //$("div").slideUp("normal"); //normal,fast,slow (variações hide)
        /* $("div").slideUp(1000); //em mili segundos
        $("div").slideDown(1000); //em mili segundos */
        $("div").slideToggle(1000);
    });
});