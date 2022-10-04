/***********AULA4*************SELETORES HIERARQUICOS************* */
    //DESCENDENTE // 
    $("div span").css("background-color", "yellow");
    //FILHOS 
    $("li > ul").css("color", "red");
    //IRMAO 
    $("#item1_1 + li").css("color", "blue");
    //TODOS OS IRMAOS 
    $("#item1_1 ~ li").css("background-color", "yellow");