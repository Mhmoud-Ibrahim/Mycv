
$(".bar").click(function(){
$('.menu').toggle(500);
})
//hide it when clicking anywhere else except the popup and the trigger
$(document).on('click touch', function(event) {
if (!$(event.target).parents().addBack().is('.bar')) {
$('.menu').hide();
}
});


$(document).ready(function(){
$(document).mouseenter(function(){
$(".container").show(1000);
});
$(document).mouseleave(function(){
$(".container").hide(1000);
});
});

$(document).ready(function(){
    $(document).mouseenter(function(){
    $(".myName").show(1000);
    });
    $(document).mouseleave(function(){
    $(".myName").hide(1000);
    });
    });
//tetor div
    $(document).ready(function(){
        $(".container").mouseenter (function(){
          $('.html').addClass("rot"); 
        });
        $(".container").mouseleave (function(){
            $('.html').removeClass("rot"); 
          });
    });

    $(document).ready(function(){
        $(".container").mouseenter (function(){
          $('.css').addClass("rot"); 
        });
        $(".container").mouseleave (function(){
            $('.css').removeClass("rot"); 
          });
    });

    $(document).ready(function(){
        $(".container").mouseenter (function(){
          $('.java').addClass("rot"); 
        });
        $(".container").mouseleave (function(){
            $('.java').removeClass("rot"); 
          });
    });

    $(document).ready(function(){
        $(".container").mouseenter (function(){
          $('.php').addClass("rot"); 
        });
        $(".container").mouseleave (function(){
            $('.php').removeClass("rot"); 
          });
    });
  
    $(document).ready(function(){
        $(".container").mouseenter (function(){
          $('.git').addClass("rot"); 
        });
        $(".container").mouseleave (function(){
            $('.git').removeClass("rot"); 
          });
    });
    
    $(document).ready(function(){
        $(".container").mouseenter (function(){
          $('.laravel').addClass("rot"); 
        });
        $(".container").mouseleave (function(){
            $('.laravel').removeClass("rot"); 
          });
    });

    $(document).ready(function(){
        $(".container").mouseenter (function(){
          $('.Vue').addClass("rot"); 
        });
        $(".container").mouseleave (function(){
            $('.Vue').removeClass("rot"); 
          });
    });

    $(document).ready(function(){
        $(".container").mouseenter (function(){
          $('.jquery').addClass("rot"); 
        });
        $(".container").mouseleave (function(){
            $('.jquery').removeClass("rot"); 
          });
    });
    //end tetor div