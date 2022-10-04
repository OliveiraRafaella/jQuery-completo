/***********AULA5*************MANIPULAÇÃO CSS DIMENSÕES E POSIÇÃO************* */

$(document).ready(function(){
    $("span").click(function(){
        
        //alert($("img").css("width"));
        /* $("img").css({
            width:"300px",
            background:"#00FF00",
            border:"30px solid #B22222"
        }) */

        //alert($("img").hasClass("imagem")); //identidica se exista a classe ou não
        //alert($("img").removeClass("imagem")); //remove a classe ou não
        $("img").addClass("destaque");

        // LARGURA E ALTURA

        /* alert($("img").height());        
        alert($("img").width()); //retorna largura da imagem
        
        alert($("img").innerWidth());//retorna largura da imagem com o padding
        alert($("img").outerWidth());//retorna largura da imagem com o borda
        alert($("img").outerWidth(true));//retorna largura da imagem com o borda, padding e margin
        
        alert($("img").innerHeight());//retorna altura da imagem com o padding
        alert($("img").outerHeight());//retorna altura da imagem com o borda */

        //POSIÇÃO DOS ELEMENTOS
        alert($("img").position().top); //posição no topo
        alert($("img").position().left); //posição a esquerda
        
        /* alert($("img").offset().top); //retorna largura e altura das margens de impressão do elemento
        alert($("img").offset().left); //posição a esquerda */
    });
});