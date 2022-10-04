/***********AULA5*************MANIPULAÇÃO DOM REMOVER NA ARVORE************* */

$(document).ready(function(){
    $("span").click(function(){
        //$("h1").remove(); // remove elementos h1
        //$("h1").remove("#titulo"); // remove elementos h1 com filtro
        
        //$("ul").empty(); // limpa elemento alvo (remove conteudo interno)

        $("ul").unwrap(); //remove elemento envolvente
    }); 

    $("ul").append("<li>Dentro e na Última posição</li>");
    $("ul").prepend("<li>Dentro e na Primeira posição</li>");
    $("ul").before("<h1 id='titulo'>Fora e Antes do Elemento</h1>");
    $("ul").after("<h1>Fora e Depois do Elemento</h1>");
    $("ul").wrap("<p></p>");

});