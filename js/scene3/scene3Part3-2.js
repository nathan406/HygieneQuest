//part 3-2: Avoid touching your face

$(document).ready(function () {
  
  //Sratch with tissue
  $(".btn-pt3-tissue").on("click", function (e) {
    var text = `
    <div class="row">
        <div class="col-12">
          <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_wfp3e88v.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop autoplay></lottie-player>
        </div>

        <div class="col-12">
          <p class="robot-speech-correct">
            Peter decided to use the Tissue to Scratch
            <br>
            It is <strong>Correct and Healthy</strong> to use the Tissue to wipe your hands and mouth

            <span><a href="#pt3-conclusion" class="btn btn-secondary btn-sm btn-pt3-conclusion" role="button">Next</a></span>
          </p> 
        </div>
    </div>
    `;
    
    $("#pt3-consequence").html(text);

    $(".btn-pt3-conclusion").on("click", function (j) {
      var text2 = `
      
      `;
      $("#pt3-conclusion").html(text2);
      $("#part-4").show();
    });
  });

  //Just scratch
  $(".btn-pt3-scratch").on("click", function (e) {
    var text = `
    <div class="row">
        <div class="col-12">
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_v4kwxtlg.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop autoplay></lottie-player>
        </div>

        <div class="col-12">
          <p class="robot-speech-wrong" style="margin-top: 20%;">
            Peter decided to Scratch.
            <br>
            It is <strong>not hygenic</strong> to touch your face!
            <span><a href="#pt3-conclusion" class="btn btn-secondary btn-sm btn-pt3-conclusion" role="button">Next</a></span>
          </p> 
        </div>
        
    </div>
    `;
    
    $("#pt3-consequence").html(text);

    $(".btn-pt3-conclusion").on("click", function (j) {
      var text2 = `
      
      `;
      $("#pt3-conclusion").html(text2);
      $("#part-4").show();
    });
  });
});