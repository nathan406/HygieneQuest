//part 3: Vitamin and mineral supplements cannot cure Malaria 

$(document).ready(function () {
  
    //myth
    $(".btn-pt3-myth").on("click", function (e) { 
      var text = `
      <!-- (1) did you know? talk about what the Malaria really is -->
      <div class="row">
        <div class="col-12">
          <p class="robot-speech-facts" style="margin-top: 20%;">
            DID YOU KNOW? <br><br>
            Malaria is an infectious disease caused by a newly discovered .
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_mivzf6fj.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-correct" style="margin-top: 20%;">
            Yes you are right :D Vitamin and mineral supplements cannot cure or prevent Malaria.
  
            <br><br>Let's bust the next!
            
            <span><a href="#part-4" class="btn btn-secondary btn-sm btn-next-3" role="button">next</a></span>
          </p> 
        </div>
        
      </div>`;
      
      $("#pt3-conclusion").html(text);
      
      $(".btn-next-3").on("click", function (e) {
        $("#part-4").show();
      });
      
    });
  
    //fact
    $(".btn-pt3-fact").on("click", function (e) { 
      var text = `
      <!-- (1) did you know? talk about what the really is Malaria -->
      <div class="row">
        <div class="col-12">
          <p class="robot-speech-facts" style="margin-top: 20%;">
            DID YOU KNOW? <br><br>
            Malaria is an infectious disease caused by a mosiquito bite .
          </p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-4">
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_mivzf6fj.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-wrong" style="margin-top: 20%;">
            Sadly you are wrong D: Vitamin and mineral supplements cannot cure or prevent Malaria.
  
            <br><br>Let's bust the next!
            
            <span><a href="#part-4" class="btn btn-secondary btn-sm btn-next-3" role="button">next</a></span>
          </p> 
        </div>
          
      </div>`;
      
      $("#pt3-conclusion").html(text);
  
      $(".btn-next-3").on("click", function (e) {
        $("#part-4").show();
      });
  
    }); 
  
  
  
  });
  