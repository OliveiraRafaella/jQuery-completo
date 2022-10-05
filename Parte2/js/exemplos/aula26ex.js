/***************************************OCULTAR E EXIBIR LINHAS TABLE */
$(document).ready(function () {
    $("tbody tr:not(.sub)").hide();
    $(".sub th").prepend("<img src='img/mais.png' class='maismenos'/>");
    $("img").click(function () {
        if($(this).attr("src") == 'img/menos.png'){
            $(this).attr("src", "img/mais.png")
            .parents().siblings("tr").hide();
        }
        else{
            $(this).attr("src", "img/menos.png")
            .parents().siblings("tr").show();
        }
    });

});