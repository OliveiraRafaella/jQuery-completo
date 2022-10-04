$(document).ready(function (){
    $("a").click(function(){
        $("#titulo").css("color","blue");
    });
});


/**********ZEBRAR A TABELA VIDEO 22*/

/* $("#filmes tbody tr:nth-child(odd)");addClass("impar"); 
//equação X = An + B
2n
2n+1
3n
4n-1
4n

*/

/***********AULA 24 DESTACAR COLUNAS******************

$("#filmes tbody tr:odd").addClass("impar");

$("#filmes thead tr th")
.not("th:first-child") //NÃO APLICA A CELULA DA PRIMEIRA COLUNA
.prepend("<span>+</span>")
.css("cursor","pointer");

$("#filmes thead tr th").each(function(i){
    var n = i-1;
    $(this).click(function(){
        $("td").removeClass("destaque")//DESMARCAR
        $(this).parents("thead") //MARCAÇÃO
        .siblings("tbody")
        .children("tr").each(function(){
            $(this).children("td:eq("+n+")")
            .addClass("destaque");
        });

        alert("click:"+n);
    })
})
*/

