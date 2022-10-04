$(document).ready(function(){
    $("span").click(function(){
        //alert($("img").attr("title")); //retorna em forma de alerta o valor do atributo title

        /* $("img")
        .attr("src","img/leao.png") //mudar valor do atributo
        .attr("title","Leão"); */

        /* $("img").attr({ //muda valor do atributo, mas em formato json
            //pode definir mais de um atributo para alterar
            src:"img/leao.png",
            title:"Leão"
        }); */

        //****REMOVER ATRIBUTO******* */
        //$("img").removeAttr("src").removeAttr("title").removeAttr("alt");

        /*********INCLUITO CLASSE CSS *********/
        /* alert($("img").hasClass("destaque"));
        $("img").addClass("destaque");
        alert($("img").hasClass("destaque")); //existe a classe? */

        /***********ALTERNADOR (se existe retira, sa não existe coloca)*********/
        $("img").toggleClass("destaque");
    });
});