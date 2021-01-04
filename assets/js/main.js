var swiper = new Swiper('.swiper-container', {
  loop:true,
  spaceBetween : 0,
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
  },
});


$(".regular").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
        breakpoint: 980, // tablet breakpoint
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 480, // mobile breakpoint
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
});



$(".regular1").slick({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200, // tablet breakpoint
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
      }
    },
    {
        breakpoint: 980, // tablet breakpoint
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 640, // mobile breakpoint
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
});

// var $grid = $('.grid').isotope({
//   itemSelector: '.isotope-item',
//   stagger: 10,
  
// });

// var top1 = document.getElementsByClassName('top1');
// var top2 = document.getElementById('top2');
// var top = document.getElementsByClassName('top');
// $('.filter-button-group').on( 'click', '.button', function() {
//   var filterValue = $(this).attr('data-filter');
//   var width = $(window).width();
//   console.log(filterValue);
//   if(filterValue == "*"){
//     $(top1).addClass("top");
//   }
//   else{
//     $(top1).removeClass("top");
//   }
//   if($(window).width() <= 1200 ){
//     $(top1).removeClass("top");
//   }

//     // else{
//     //   top1.removeClass('top');
//     // }
//   $grid.isotope({ filter: filterValue });

// });

// $(window).resize(function(){
//   var width = $(window).width();
//   // console.log(width);
//   if(width <= 1200){
//       $(top1).removeClass("top");
//   }
// })



// // change is-checked class on buttons
// $('.button-group').each( function( i, buttonGroup ) {
//   var $buttonGroup = $( buttonGroup );
//   $buttonGroup.on( 'click', 'button', function() {
//     $buttonGroup.find('.is-checked').removeClass('is-checked');
//     $( this ).addClass('is-checked');
//   });
// });

// var swiper = new Swiper('.swiper-container1', {
//       spaceBetween: 30,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });

$(document).ready(function(){

  $('.hidden').css('display','none');

  $( "#filter button" ).each(function() {

    $(this).on("click", function(){

         var filter = $(this).attr('class');         

      if ( $(this).attr('class') == 'all' ) {
        // $('#posts').addClass('height');
         $('.hidden').contents().appendTo('#posts').hide().fadeIn("200");
         $( "#filter button" ).removeClass('active');
         $(this).addClass('active');
         $("#filter button").attr("disabled", false);
         $(this).attr("disabled", true);
      }
      else {
         $('.post').appendTo('.hidden');
         $('.hidden').contents().appendTo('#posts').hide().fadeIn("700");
         $('.post:not(.' + filter + ')').appendTo('.hidden').hide('slow');
         $( "#filter button" ).removeClass('active');
         $(this).addClass('active');
         $("#filter button").attr("disabled", false);
         $(this).attr("disabled", true);
      };
      
      });

  });

});

 
