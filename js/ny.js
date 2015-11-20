$(document).ready(function(){
  $('#intro').css({opacity: 1}).animate({opacity: 0.0}, 2000);

  setTimeout(function(){
    $('#intro').css('display','none');
  },2000);
});

// Pricing tables popovers
    //-----------------------------------------------
    if ($(".subway").length>0) {
      $(".subway").popover({
        trigger: 'hover',
        container: 'body'
      });
    };

// var hideShowCount = 0 ;
// window.addEventListener("pagehide", function() {
//     hideShowCount++ ;
//     showEventTime('pagehide') ;
// });

// window.addEventListener("pageshow", function() {
//     hideShowCount++ ;
//     showEventTime('pageshow') ;
// });

// function clickHandler(){
//     var hideShowCountAtClick = hideShowCount ;
//     showEventTime('click') ;
//     setTimeout(function () {
//                showEventTime('timeout function '+(hideShowCount-hideShowCountAtClick)+' hide/show events') ;
//                if (hideShowCount == hideShowCountAtClick){
//                     // app is not installed, go to App Store
//                     break;
//                }
//             }, 1000);
// }

// function currentTime()
// {
//     return Date.now()/1000 ;
// }

// function showEventTime(event){
//     var time = currentTime() ;
//     document.body.appendChild(document.createElement('br'));
//     document.body.appendChild(document.createTextNode(time+' '+event));
// }