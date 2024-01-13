//part 5: Disposal of used tissue immediately

$(document).ready(function () {
  //hide parts
  $("#text-pt4-conclusion").hide();
  $("#part-5-2").hide();
  
  //Avoid contact with others 

  //Avoid contact with others
  $(".btn-pt5-1").on("click", function (e) {
    var text = `
    <div class="row">
        <div class="col-8">
          <p class="robot-speech" style="margin-top: 20%;">
          Peter just sneezed
          </p> 
        </div>

        <div class="col-4">
          <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_hHODoj.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"   loop autoplay></lottie-player>
        </div>
    </div>
    `;
    
    $("#text-pt5-1").html(text);
    $("#part-5-2").show();

  });
  
 });