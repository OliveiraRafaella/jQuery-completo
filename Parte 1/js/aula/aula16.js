/***********AULA5*************EVENTOS DE MOUSE************* */

$(document).ready(function(){
    $("span")/* .click(function () {
        $("div").text("Click").css("color","blue");
    }).dblclick(function () {
        $("div").text("Click Duplo").css("color","red");
    }).mouseover(function () {
        $("div").text("Mouse Over").css("color","white");
    }).mouseout(function () {
        $("div").text("Mouse Out").css("color","black");
    }) */.mouseup(function () {
        $("div").text("Mouse Up").css("color","green");
    }).mousedown(function () {
        $("div").text("Mouse Down").css("color","yellow");
    }).mousemove(function (p) {
        $("div").text("X="+p.clientX+" Y= "+p.clientY).css("color","black");
    });
});