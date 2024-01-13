//part 4-2: (choice 1) should mary go see the doctor or stay home?

$(document).ready(function () {
  $("#part-5").hide();
  
    // Make yourself a meter apart from the person standing in front of you
    $(".btn-pt4-move").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_aGWCIX.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech-correct">
              Peter decided to Make himself two meter apart from the person standing in front of him
              <strong>Well Done!</strong>
  
              <span><a href="#pt4-conclusion" class="btn btn-secondary btn-sm btn-pt4-conclusion" role="button">Next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt4-consequence").html(text);
  
      $(".btn-pt4-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt4-conclusion").html(text2);
        $("#part-5").show();
      });
  
  
    });
  
    //Que up close to one another.
    $(".btn-pt4-close").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_ZenthI.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech-wrong" style="margin-top: 20%;">
              Peter decided to Move Closer
              <br>
              You should not move closer.
              You should always have distance between one another so the corona virus does not spread
              <br>
              <strong>Social-Distancing of 2M should be followed</strong>
  
              <span><a href="#pt4-conclusion" class="btn btn-secondary btn-sm btn-pt4-conclusion" role="button">Next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt4-consequence").html(text);
  
      $(".btn-pt4-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt4-conclusion").html(text2);
        $("#part-5").show();
      });
    });
  });