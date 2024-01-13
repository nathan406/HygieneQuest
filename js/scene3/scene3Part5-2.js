//part 5-2: Throw away used tissue

$(document).ready(function () {
  $("#part-6").hide();

    // Threw away used tissue
    $(".btn-pt5-throw").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_FY7o8z.json"  background="transparent"  speed="0.8"  style="width: 100%; height: 100%;"  loop autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech-correct">
              Peter decided to throw away the tissue.
              <br>
              <strong> You should always throw away used tissue immedietly.</strong>
              To avoid the spread of infections.
  
              <span><a href="#pt5-conclusion" class="btn btn-secondary btn-sm btn-pt5-conclusion" role="button">Next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt5-consequence").html(text);
  
      $(".btn-pt5-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt5-conclusion").html(text2);
        $("#part-6").show();
      });
  
  
    });
  
    //Kept the used tissue
    $(".btn-pt5-keep").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_3ucc3vz0.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech-wrong" style="margin-top: 20%;">
              Peter decided to keep the Tissue
              <br>
              It is <strong>not safe</strong>.
              Peter might contaminate himself and his surrounding.
              This will increase the spread of infections.
  
              <span><a href="#pt5-conclusion" class="btn btn-secondary btn-sm btn-pt5-conclusion" role="button">Next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt5-consequence").html(text);
  
      $(".btn-pt5-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt5-conclusion").html(text2);
        $("#part-6").show();
      });
    });
  });