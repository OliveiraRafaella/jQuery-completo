$(document).ready(function () {
    $("#filmes tbody tr:odd").addClass("impar");

    /*$("#filmes thead tr th")
        .not("th:first-child") //NÃO APLICA A CELULA DA PRIMEIRA COLUNA
        .prepend("<span>+</span>")
        .css("cursor", "pointer");*/
    $("#filmes thead tr th")
    .not("th:first-child")
    .prepend("<span>+</span>")
    .css("cursor","pointer");

    $("#filmes thead tr th").each(function (i){
        var n = i;
        $(this).click(function (){
            $("td").removeClass("destaque");
            $(this)
            .parents("thead")
            .siblings("tbody")
            .children("tr").each(function () {
                $(this).children("td:eq("+n+")")
                .addClass("destaque");
            });
        });
    });
});