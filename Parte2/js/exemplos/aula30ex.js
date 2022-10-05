/***************************************RESTRINGIR CARACTERES *********************/
$(document).ready(function () {
    $(".numeros").bind("keydown ", function(e){
        var keyCode= e.which; //informação tecla pressionada
        var isOther = (",8,46,37, 38,39,40,".indexOf(","+ keyCode +",") > -1);
        //TECLAS NUMERICAS 47-58
        if((keyCode > 47 && keyCode < 58) || isOther){
            return true;
        }
        else{
            return false;
        }
    });
});