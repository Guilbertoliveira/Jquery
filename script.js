$(document).ready(function(){ //verifica se está carregado a script
   
   $('#l2').click(function(){ //função click no <a>
       $('#i1').hide();
       $('#i2').show();
       $('#i3').hide();
   })

   $('#l3').click(function(){
    $('#i1').hide();
    $('#i2').hide();
    $('#i3').show();
})

    $('#l1').click(function(){
    $('#i1').show();
    $('#i2').hide();
    $('#i3').hide();
})
   
   
    $('button').click(function() //chama ação
    {
       // $('h1').hide(); //esconde seletor 
       // $('#unico').css("color", "red"); //colocar css font red
       $('#unico').css("background-color", "red");
       //$('#unico').fadeOut(); // desaparece de maneira suave
       //$('#unico').delay(3000); //delay de milesegundos
       //$('#unico').fadeIn('slow'); //aparece

       // encadeamento em bloco
       $('#vazia')
            .text("Cor alterada com sucesso")
            .css({color:'red', border: '1px solid red'}) // mais de uma propriedade no css
            //.css('border', '1px solid red')
            .fadeOut(3000)
            .addClass('green')//adicionando classe .green
            
            
            $('button').removeClass('red');
    });
})