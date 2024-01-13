//part 7: Drinking alcohol does NOT protect you against Malaria and can be DANGEROUS.

$(document).ready(function () {
  
    //myth
    $(".btn-pt7-myth").on("click", function (e) { 
      var text = `
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets7.lottiefiles.com/datafiles/AembVTvov5PkTSJ/data.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-correct" style="margin-top: 20%;">
            Yes you are right :D Drinking alcohol does NOT protect you against Malaria and can be DANGEROUS.
  
            <br><br>Let's bust the next!
            
            <span><a href="#part-8" class="btn btn-secondary btn-sm btn-next-7" role="button">next</a></span>
          </p> 
        </div>
        
      </div>`;
      
      $("#pt7-conclusion").html(text);
      
      $(".btn-next-7").on("click", function (e) {
        $("#part-8").show();
      });
      
    });
  
    //fact
    $(".btn-pt7-fact").on("click", function (e) { 
      var text = `
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets7.lottiefiles.com/datafiles/AembVTvov5PkTSJ/data.json" background="transparent"  speed="1"  style="width: 100%; height: 100%;" autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-wrong" style="margin-top: 20%;">
            Sadly you are wrong D: Drinking alcohol does NOT protect you against Malaria and can be DANGEROUS.
  
            <br><br>Let's bust the next!
            
            <span><a href="#part-8" class="btn btn-secondary btn-sm btn-next-7" role="button">next</a></span>
          </p> 
        </div>
          
      </div>`;
      
      $("#pt7-conclusion").html(text);
  
      $(".btn-next-7").on("click", function (e) {
        $("#part-8").show();
      });
  
    }); 
  
  
  
  });
  