/***********AULA5*************MANIPULAÇÃO DOM CRIANDO ELEMENTO************* */

$(document).ready(function(){
    $("span").click(function(){
        
        var img = $("<img/>", {
            src:"img/img1.png",
            title:"Natureza",
            click: function () {
                alert("Amo a natureza");
            }
        });

        var ul = $("<ul/>").append("<li/>").append("Programador de Interfac Web");

        $("body").append(img).append(ul);
    });    
});