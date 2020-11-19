
/************************* start brands slider******************/
$(document).ready(function(){
  $('.brand').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplaySpeed:1000,
    margin:10,
    responsiveClass:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
           
        }
    }
})
});
/************************* end brands slider******************/





/**************************************************************************/
/****************** register validation *****************/
$(document).ready(function(){

       $(" #name").blur(function(){
        if($('#name').val() != ""){
            $(this).css('border-color','green');
            $('.register .fa-user').css('color','green');
            $('p.name').addClass('d-none');
            
        }else{
            $(this).css('border-color','red');
            $('.register .fa-user').css('color','red');
            $('p.name').removeClass('d-none');
        }
      });
    
    $("#email").blur(function(){
        if($('#email').val() != ""){
            $(this).css('border-color','green');
            $('.register .fa-at').css('color','green');
            $('p.email').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.register .fa-at').css('color','red');
            $('p.email').removeClass('d-none');
        }
      });
    
      $("#pass").blur(function(){
        if($('#pass').val() != ""){
            $(this).css('border-color','green');
            $('.register .fa-unlock').css('color','green');
            $('p.pass').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.register .fa-unlock').css('color','red');
            $('p.pass').removeClass('d-none');
        }
      });
    
      $('#re-pass').change(function(){
          if($('#pass').val() == $('#re-pass').val()){
            $(this).css('border-color','green');
            $('.register .fa-undo').css('color','green');
            $('p.re-pass').addClass('d-none');
          }else{
            $(this).css('border-color','red');
            $('.register .fa-undo').css('color','red');
            $('p.re-pass').removeClass('d-none'); 
          }
      });


      $('.register button').click(function(){

        if ($('#name').val() !=''){
                if ($('#email').val() !='') {
                    if ($('#pass').val() !='') {
                        if ($('#re-pass').val() !=''){
                            alert('good');
                        }else{
                        alert('re pass empty');
                        }
                    }else{
                        alert('pass empty');
                    }
                }else{
                    alert('email empty');
                }
            }else{
                alert('name empty');
            }
        
    
        });
    
});


/****************** login validation *****************/
$(document).ready(function(){

    $("#lo-email").blur(function(){
        if($('#lo-email').val() != ""){
            $(this).css('border-color','green');
            $('.login .fa-at').css('color','green');
            $('p.lo-email').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.login .fa-at').css('color','red');
            $('p.lo-email').removeClass('d-none');
        }
      });

      $("#lo-pass").blur(function(){
        if($('#lo-pass').val() != ""){
            $(this).css('border-color','green');
            $('.login .fa-unlock-alt').css('color','green');
            $('p.lo-pass').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.login .fa-unlock-alt').css('color','red');
            $('p.lo-pass').removeClass('d-none');
        }
      });

      $('.login button').click(function(){

        if ($('#lo-email').val() !=''){
                if ($('#lo-pass').val() !='') {alert('good');

                }else{ alert(' pass empty');}

            }else{ alert('email empty');}
        });

});




/************ contact page */
$(document).ready(function(){
    $(".span").click(function(){
//            $("#show").toggleClass("drobdown");
        
        $("#face").fadeToggle();
      $("#twit").fadeToggle(500);
      $("#inst").fadeToggle(1000);
    });
  });


