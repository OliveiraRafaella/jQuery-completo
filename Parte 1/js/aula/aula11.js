/***********AULA5*************MANIPULAÇÃO DE CONTEUDO************* */

$(document).ready(function(){
    $("span").click(function(){
        //alert($("p").html());
        //$("p").html("<h1>Conheça o Brasil</h1>") // inclui conteudo com tag html
        
        /* $("div").text("<h1>Conheça o Brasil</h1>"); //interpreta como textp simples
        alert($("div").text()) */

        //$("div").text($("p").html());

        //alert($("textarea").val()); //Recupera o valor de dentro do formulario 

       // $("div").replaceWith("<p> Quem disse? </p>"); //troca elemento por outra
       $("div").replaceWith($("textarea").val()); //substitui div por elemento textarea        

    });    
});