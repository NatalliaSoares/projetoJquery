
$(document).ready(function(){
    $('#botaoBill').on("click", function(){
        $('#lutKatie').animate({
            opacity: 0, 
        });
        $('#lutMark').animate({
            opacity: 0,
        });
        $('#lutMusk').animate({
            opacity: 0,
        });
        $('#lutBill').animate({
            opacity: 1,   
         });
    });

    $('#botaoKatie').on("click", function(){
        $('#lutBill').animate({
        opacity: 0,
        });
        $('#lutMark').animate({
            opacity: 0,
        });
        $('#lutMusk').animate({
            opacity: 0,
        });
        $('#lutKatie').animate({
        opacity: 1,     
        });
    });

    $('#botaoMark').on("click", function(){
        $('#lutKatie').animate({
        opacity: 0,
        });
        $('#lutBill').animate({
            opacity: 0,
        });
        $('#lutMusk').animate({
            opacity: 0,
        });
        $('#lutMark').animate({
        opacity: 1,    
        });
    });

    $('#botaoMusk').on("click", function(){
        $('#lutMark').animate({
        opacity: 0,
        });
        $('#lutKatie').animate({
            opacity: 0, 
        });
        $('#lutBill').animate({
            opacity: 0,
        });
        $('#lutMusk').animate({
        opacity: 1,    
        });
    });
});



$(document).ready(function(){
    $('#botaoBill2').on("click", function(){
        $('#lutKatie2').animate({
        opacity: 0, 
        });
        $('#lutMark2').animate({
            opacity: 0,
        });
        $('#lutMusk2').animate({
            opacity: 0,
        });
        $('#lutBill2').animate({
        opacity: 1, 
         });
    });

    $('#botaoKatie2').on("click", function(){
        $('#lutBill2').animate({
        opacity: 0,
        });
        $('#lutMark2').animate({
            opacity: 0,
        });
        $('#lutMusk2').animate({
            opacity: 0,
        });
        $('#lutKatie2').animate({
        opacity: 1    
        });
    });

    $('#botaoMark2').on("click", function(){
        $('#lutKatie2').animate({
        opacity: 0,
        });
        $('#lutBill2').animate({
            opacity: 0,
        });
        $('#lutMusk2').animate({
            opacity: 0,
        });
        $('#lutMark2').animate({
        opacity: 1,   
        });
    });

    $('#botaoMusk2').on("click", function(){
        $('#lutMark2').animate({
        opacity: 0, 
        });
        $('#lutKatie2').animate({
            opacity: 0,
        });
        $('#lutBill2').animate({
            opacity: 0,
        });
        $('#lutMusk2').animate({
        opacity: 1,
        });
    });
});



$(document).ready(function(){
    $('#botaoBill').click(function(){
        $(this).addClass('selecionado')
    });
    $('#botaoKatie').click(function(){
        $('#botaoBill').removeClass('selecionado')
    });
    $('#botaoMark').click(function(){
        $('#botaoBill').removeClass('selecionado')
    });
    $('#botaoMusk').click(function(){
        $('#botaoBill').removeClass('selecionado')
    });


    $('#botaoKatie').click(function(){
        $(this).addClass('selecionado')
    });
    $('#botaoBill').click(function(){
        $('#botaoKatie').removeClass('selecionado')
    });
    $('#botaoMark').click(function(){
        $('#botaoKatie').removeClass('selecionado')
    });
    $('#botaoMusk').click(function(){
        $('#botaoKatie').removeClass('selecionado')
    });


    $('#botaoMark').click(function(){
        $(this).addClass('selecionado')
    });
    $('#botaoBill').click(function(){
        $('#botaoMark').removeClass('selecionado')
    });
    $('#botaoKatie').click(function(){
        $('#botaoMark').removeClass('selecionado')
    });
    $('#botaoMusk').click(function(){
        $('#botaoMark').removeClass('selecionado')
    });


    $('#botaoMusk').click(function(){
        $(this).addClass('selecionado')
    });
    $('#botaoBill').click(function(){
        $('#botaoMusk').removeClass('selecionado')
    });
    $('#botaoKatie').click(function(){
        $('#botaoMusk').removeClass('selecionado')
    });
    $('#botaoMark').click(function(){
        $('#botaoMusk').removeClass('selecionado')
    });
});



$(document).ready(function(){
    $('#botaoBill2').click(function(){
        $(this).addClass('selecionado2')
    });
    $('#botaoKatie2').click(function(){
        $('#botaoBill2').removeClass('selecionado2')
    });
    $('#botaoMark2').click(function(){
        $('#botaoBill2').removeClass('selecionado2')
    });
    $('#botaoMusk2').click(function(){
        $('#botaoBill2').removeClass('selecionado2')
    });


    $('#botaoKatie2').click(function(){
        $(this).addClass('selecionado2')
    });
    $('#botaoBill2').click(function(){
        $('#botaoKatie2').removeClass('selecionado2')
    });
    $('#botaoMark2').click(function(){
        $('#botaoKatie2').removeClass('selecionado2')
    });
    $('#botaoMusk2').click(function(){
        $('#botaoKatie2').removeClass('selecionado2')
    });


    $('#botaoMark2').click(function(){
        $(this).addClass('selecionado2')
    });
    $('#botaoBill2').click(function(){
        $('#botaoMark2').removeClass('selecionado2')
    });
    $('#botaoKatie2').click(function(){
        $('#botaoMark2').removeClass('selecionado2')
    });
    $('#botaoMusk2').click(function(){
        $('#botaoMark2').removeClass('selecionado2')
    });


    $('#botaoMusk2').click(function(){
        $(this).addClass('selecionado2')
    });
    $('#botaoBill2').click(function(){
        $('#botaoMusk2').removeClass('selecionado2')
    });
    $('#botaoKatie2').click(function(){
        $('#botaoMusk2').removeClass('selecionado2')
    });
    $('#botaoMark2').click(function(){
        $('#botaoMusk2').removeClass('selecionado2')
    });
});

