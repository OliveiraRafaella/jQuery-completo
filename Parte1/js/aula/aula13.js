/***********AULA5*************MANIPULAÇÃO DOM INSERIR NA ARVORE************* */

$(document).ready(function(){
    $("span").click(function(){
        
        //$("ul").append("<li>Dentro e na Última posição</li>");
        //$("ul").prepend("<li>Dentro e na Primeira posição</li>");
        //$("ul").before("<h1>Fora e Antes do Elemento</h1>");
        //$("ul").after("<h1>Fora e Depois do Elemento</h1>");

       //$("ul").wrap("<p></p>");//envolve tag
       $("ul").append($("li").clone());//faz uma copia


    });    
});