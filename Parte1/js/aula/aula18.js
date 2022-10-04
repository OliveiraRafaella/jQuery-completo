/***********AULA5*************EVENTOS AVANÇADOS************* */

$(document).ready(function(){
   /*  $(":text").keyup(function(){
        $("#msg").text($(this).val());
    });
 */
    // EQUIVALENTE A FUNÇÃO A CIMA
    /* $(":text").bind("keyup",function(){
        $("#msg").text($(this).val());
    }); */

    /*********REAPROVEITAMENTO DE CODIGO */
    function msg(e){
        $("#msg").text($(this).val());
    }
    //$(:text).keyup(msg).focus(msg).blur(msg) //equivalente a função abaixo
    //$(":text").bind("keyup focus blur",msg); //informar mais de um manipulador
    /*******BIND associa um evento ao elemento */
    /* $(":button").bind("click",function () {
        $(":text").unbind("keyup",msg); //desassocia
        //TRIGGER - DISPARA UM EVENTO
        $(":text").val("Texto Incluido via jQuery");
        $(":text").trigger("focus");
    });*/
    /* $("fieldset").delegate(":text", "keyup",msg);
    $(":button").bind("click",function (e) {
        $("fieldset").prepend("Outro:<input type='text' name:'outro'/>"); //desassocia

    }); */

    ///**********MAIPULADOR DE EVENTOS QUE RECEBE VARIOS PARAMETROS***************    
   
    $(":button").bind("click",function(e,src,width){
        $("#msg").append($("<img/>").attr("src",src).css("width",width));
    });
    $(":button").trigger("click",["img/img1.png","90px"]); //erro
});