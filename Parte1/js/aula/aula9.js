/***********AULA5*************SELETORES DE FORMULARIO************* */

$(document).ready(function(){
    //$(":input").css("border","3px solid #FF0000")

    $(":button").click(function(){
        //$(":password").css("border","3px solid #FF0000");
        //$(":radio").parent().css("border","3px solid #FF0000");
        //$(":checkbox").parent().css("border","3px solid #FF0000");
        //$("select").css("border","3px solid #FF0000");
        //$("textarea").css("border","3px solid #FF0000");
        //$(":submit").css("border","3px solid #FF0000");
        //elemrntos habilitados
        //$(":enabled").css("border","3px solid #FF0000");
        //$(":disabled").css("border","3px solid #FF0000");
        $(":checked").parent().css("border","3px solid #FF0000");

        
    });

    
});