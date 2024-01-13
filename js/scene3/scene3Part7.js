//part 7: Which mask is worn correctly?

$(document).ready(function () {
  //hidden parts
  $("#text-pt6-conclusion").hide();
  $("#part-7-2").hide();
  
  //Which mask is worn correctly?
  $(".btn-pt7-1").on("click", function (e) {
    var text = `
    <div class="row">
        <div class="col-8">
          <p class="robot-speech" style="margin-top: 20%;">
          <strong>Help Peter!</strong>
          </p> 
        </div>

        <div class="col-4">
          <lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_dwnpjl1l.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"   loop autoplay></lottie-player>
        </div>
    </div>
    `;
    
    $("#text-pt7-1").html(text);
    $("#part-7-2").show();


  });
});