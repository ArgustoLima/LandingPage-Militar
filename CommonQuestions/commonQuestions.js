$(document).ready(function(){

    $(function() {
        $('.trocar').hover(function(){
            $(this).children('.front').stop().animate({"top" : '300px'},700); 
    }, function(){
             $(this).children('.front').stop().animate({"top":'0'},400);
        });
    });


    $(".conteudo-lista-servico-pergunta").ready(function(){
        $("#divshow1, #divshow2, #divshow3, #divshow4, #divshow5, #divshow6, #divshow7, #divshow8, #divshow9").hide();
    });

    $("#divlista1").click(function(){
        $("#divshow1").show();
    });

    $("#hide1").click(function(){
        $("#divshow1").hide();
    });
    
    $("#divlista2").click(function(){
        $("#divshow2").show();
    });

    $("#hide2").click(function(){
        $("#divshow2").hide();
    });

    $("#divlista3").click(function(){
        $("#divshow3").show();
    });

    $("#hide3").click(function(){
        $("#divshow3").hide();
    });

    $("#divlista4").click(function(){
        $("#divshow4").show();
    });

    $("#hide4").click(function(){
        $("#divshow4").hide();
    });

    $("#divlista5").click(function(){
        $("#divshow5").show();
    });

    $("#hide5").click(function(){
        $("#divshow5").hide();
    });

    $("#divlista6").click(function(){
        $("#divshow6").show();
    });

    $("#hide6").click(function(){
        $("#divshow6").hide();
    });

    $("#divlista7").click(function(){
        $("#divshow7").show();
    });

    $("#hide7").click(function(){
        $("#divshow7").hide();
    });

    $("#divlista8").click(function(){
        $("#divshow8").show();
    });

    $("#hide8").click(function(){
        $("#divshow8").hide();
    });

    $("#divlista9").click(function(){
        $("#divshow9").show();
    });

    $("#hide9").click(function(){
        $("#divshow9").hide();
    }); 
})