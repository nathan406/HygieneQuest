$(document).ready(function () {
  //hide parts to be shown only when button is clicked
  $("#part-2").hide();
  $("#part-3").hide();
  $("#part-4").hide();

  // "btn-next-1" will go to "part-2" ...
  //event listener for button
  $(".btn-next-1").on("click", function (e) {
    $("#part-2").show();

  });

  $(".btn-next-2").on("click", function (e) {
    $(".time-travel-anim").html(`
    <lottie-player src="https://assets2.lottiefiles.com/temp/lf20_w7FhN3.json"  background="transparent"  speed="1"  style="width: 90%; height: 90%; padding-left: 200px;"  loop autoplay></lottie-player>`);

    $("#part-3").show();
    
  });

  $(".btn-next-3").on("click", function (e) {
    $("#part-4").show();
    
  });
  
  
});