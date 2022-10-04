/***************solução utilizando jquery***************/
$(document).ready(function () {
    $("a").click(function () {
        $("#titulo").css("color", "blue");
        /*
        $("#titulo").css("color","blue"); -: mda de coir
        $("#titulo").text("Cursos Cursoe jQuery");-: muda o texyo
        $("#titulo").hide("color","blue");-> ocultar
        $("#titulo").fadeToggle(); esconte ou mostra um elemento
        */
    });
});

/****************** solução utilizado javascript ******************
window.onload = function () {
     document.getElementsByTagName("a")[0].onclick = alterarTitulo;
 }
 
 function alterarTitulo(){
     document.getElementById('titulo').style.color='#0000FF';
 }*/