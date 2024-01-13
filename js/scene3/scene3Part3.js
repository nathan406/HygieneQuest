//part 3: story of the previous the night (why mary got sick)

$(document).ready(function () {
  //hide parts
  // $(".question-pt3-2").hide();
  $("#text-pt3-conclusion").hide();
  $("#part-3-2").hide();


  //Avoid Touching your face

  //Avoid Touching your face
  $(".btn-pt3-1").on("click", function (e) {
    var text = `
    <div class="row">
        <div class="col-8">
          <p class="robot-speech" style="margin-top: 20%;">
            Peter's face is itchy. He wants to scratch it badly.
          </p> 
        </div>

        <div class="col-4">
          <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_pyiyoyxf.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"   loop autoplay></lottie-player>
        </div>
    </div>
    `;
    
    $("#text-pt3-1").html(text);
    $("#part-3-2").show();

  });
  
 });