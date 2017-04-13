$(function(){

     // Universidade
    $('.universidade').editable('click', function(e){
        console.log(e.value);
    });
    // Autor
    $('.autor').editable({type: 'textarea', action: 'click'}, function(e){
        console.log(e.value);
    });

    // titulo
    $('.titulo span').editable({type: 'textarea', action: 'click'}, function(e){
        console.log(e.value);
    });
    $('.titulo small').editable('click', function(e){
        console.log(e.value);
    });

    // Universidade
    $('.cidade').editable('click', function(e){
        console.log(e.value);
    });

    // Ano
    $('.ano').editable('click', function(e){
        if(e.value.match(/^\d{4}$/)){
          console.log(e.value);
        }
        else{
          $('.ano').html(e.old_value);
          $('.msg').fadeIn();
        }
    });

    // Fechar modal ano
    $('.fechar').on('click', function(){
        $('.msg').fadeOut();
    });

});