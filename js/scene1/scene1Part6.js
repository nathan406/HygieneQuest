//part 6: Most people who get Malaria recover from it.

$(document).ready(function () {
  
    //myth
    $(".btn-pt6-myth").on("click", function (e) { 
      var text = `
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_dcU5CK.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-correct" style="margin-top: 20%;">
            Yes you are right :D Most people who get Malaria recover from it.
  
            <br><br>Let's bust the next!
  
            <span><a href="#part-7" class="btn btn-secondary btn-sm btn-next-6" role="button">next</a></span>
          </p> 
        </div>
          
      </div>`;
      
      $("#pt6-conclusion").html(text);
  
      $(".btn-next-6").on("click", function (e) {
        $("#part-7").show();
      });
      
  
    });
  
    //fact
    $(".btn-pt6-fact").on("click", function (e) { 
      var text = `
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_dcU5CK.json" background="transparent"  speed="1"  style="width: 100%; height: 100%;" autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-wrong" style="margin-top: 20%;">
            Sadly you are wrong D: Most people who get Malaria recover from it.
  
            <br><br>Let's bust the next!
            
            <span><a href="#part-7" class="btn btn-secondary btn-sm btn-next-6" role="button">next</a></span>
          </p> 
        </div>
          
      </div>`;
      
      $("#pt6-conclusion").html(text);
  
      $(".btn-next-6").on("click", function (e) {
        $("#part-7").show();
      });
      
  
    }); 
  
  
  
  });
  