//part 5: People should NOT wear masks while exercising 

$(document).ready(function () {
  
    //myth
    $(".btn-pt5-myth").on("click", function (e) { 
      var text = `
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_ufgbcgx8.json" background="transparent"  speed="1"  style="width: 100%; height: 100%;" autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-wrong" style="margin-top: 20%;">
            Sadly you are wrong D: People should NOT wear masks while exercising.
  
            <br><br>Let's bust the next!
            
            <span><a href="#part-6" class="btn btn-secondary btn-sm btn-next-5" role="button">next</a></span>
          </p> 
        </div>
          
      </div>`;
      
      $("#pt5-conclusion").html(text);
  
      $(".btn-next-5").on("click", function (e) {
        $("#part-6").show();
      });
      
  
    });
  
    //fact
    $(".btn-pt5-fact").on("click", function (e) { 
      var text = `
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_ufgbcgx8.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-correct" style="margin-top: 20%;">
            Yes you are right :D People should NOT wear masks while exercising 
  
            <br><br>Let's bust the next!
  
            <span><a href="#part-6" class="btn btn-secondary btn-sm btn-next-5" role="button">next</a></span>
          </p> 
        </div>
          
      </div>`;
      
      $("#pt5-conclusion").html(text);
  
      $(".btn-next-5").on("click", function (e) {
        $("#part-6").show();
      });
      
  
    }); 
  
  
  
  });
  