//part 8: Thermal scanners CANNOT detect Malaria.

$(document).ready(function () {
  
    //myth
    $(".btn-pt8-myth").on("click", function (e) { 
      var text = `
      <!-- (3) did you know? talk about symptoms-->
      <div class="row">
        <div class="col-12">
          <p class="robot-speech-facts" style="margin-top: 20%;">
            WHAT ARE THE SYMPTOMS THEN?<br><br>
            Most common symptoms include fever, flu, dry cough, tiredness.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_utjRCm.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-correct" style="margin-top: 20%;">
            Yes you are right :D Thermal scanners CANNOT detect Malaria.
  
            <br><br>Let's bust the next!
  
            <span><a href="#part-9" class="btn btn-secondary btn-sm btn-next-8" role="button">next</a></span>
          </p> 
        </div>
        
      </div>`;
      
      $("#pt8-conclusion").html(text);
      
      $(".btn-next-8").on("click", function (e) {
        $("#part-9").show();
      });
      
    });
  
    //fact
    $(".btn-pt8-fact").on("click", function (e) { 
      var text = `
      <!-- (3) did you know? talk about symptoms-->
      <div class="row">
        <div class="col-12">
          <p class="robot-speech-facts" style="margin-top: 20%;">
            WHAT ARE THE SYMPTOMS THEN?<br><br>
            Most common symptoms include fever, flu, dry cough, tiredness.
          </p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_utjRCm.json" background="transparent"  speed="1"  style="width: 100%; height: 100%;" autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-wrong" style="margin-top: 20%;">
            Sadly you are wrong D: Thermal scanners CANNOT detect Malaria.
  
            <br><br>Let's bust the next!
            
            <span><a href="#part-9" class="btn btn-secondary btn-sm btn-next-8" role="button">next</a></span>
          </p> 
        </div>
          
      </div>`;
      
      $("#pt8-conclusion").html(text);
  
      $(".btn-next-8").on("click", function (e) {
        $("#part-9").show();
      });
  
    }); 
  
  
  
  });
  