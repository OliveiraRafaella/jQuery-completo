/***********AULA5*************EVENTOS DE FORMULARIO E TECLADOS************* */

$(document).ready(function(){
    $(":text").keyup(function(){
        $("#msg").text($(this).val());
    });
   /*  $(":text").keypress(function(){
        $("#msg").text($(this).val());
    }); */
    /* $(":text").keydown(function(){
        $("#msg").text($(this).val());
    }); */

    $(":text").keyup(function(){
        $("#msg").text($(this).val());
    }).focus(function () {
        $(this).css("background","yellow")
        $("msg").text("Focus");
    }).blur(function () {
        $(this).css("background","#DDD")
        $("msg").text("Blur");
    });

    /********* VALIDAÇÃO DE FORMULARIOS **************/
    $("form").submit(function () {
        if($(":text").val()=="RAFA"){
            return true;
        }
        return false;
    });

    $("select").change(function(){
        var escolha = $("option:selected").text();
        $("#msg").text("Escolhido : " + escolha);
    });
    
    $("textarea").select(function(){
        //var escolha = $($(this).val());
        $("#msg").text("Selecionou");
    });


});