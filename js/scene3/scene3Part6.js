//part 6: Move Away from aniamls

$(document).ready(function () {
  //hidden parts
  $("#text-pt5-conclusion").hide();
  $("#part-6-2").hide();

  //Avoid contact with animals
  $(".btn-pt6-1").on("click", function (e) {
    var text = `
    <div class="row">
        <div class="col-8">
          <p class="robot-speech" style="margin-top: 20%;">
          Peter just saw a <strong>Bird</strong> land on the ground infront of him.
          </p> 
        </div>

        <div class="col-4">
          <lottie-player src="https://assets7.lottiefiles.com/temp/lf20_lTIFjv.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"   loop autoplay></lottie-player>
        </div>
    </div>
    `;
    
    $("#text-pt6-1").html(text);
    $("#part-6-2").show();

  });
  
 });