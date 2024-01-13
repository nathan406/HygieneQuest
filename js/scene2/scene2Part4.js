//part 4: (choice 1) should mary go see the doctor or stay home?

$(document).ready(function () {
  
  //go to doctor
  $(".btn-pt4-doc").on("click", function (e) {
    var text = `
    <div class="row">
      <div class="col-6">
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_TAdvcC.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
      </div>

      <div class="col-6">
        <lottie-player src="https://assets10.lottiefiles.com/temp/lf20_qCBn5k.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
      </div>

      <div class="col-12">
        <p class="robot-speech-correct" style="margin-top: 20%;">
          Mary decided to go to the doctor. That is a great choice :D Remember to CALL FIRST!

          <span><a href="#part-5" class="btn btn-secondary btn-sm btn-next-4" role="button">next</a></span>
        </p> 
      </div>
        
    </div>`;
    
    $("#pt4-consequence").html(text);

    $(".btn-next-4").on("click", function (e) {
      $("#part-5").show();
    });


  });

  //go to school
  $(".btn-pt4-sch").on("click", function (e) {
    var text = `
    <div class="row">
      <div class="col-6">
        <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_CrFtpW.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    loop autoplay></lottie-player>
      </div>

      <div class="col-6">
        <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_89H5RP.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
      </div>

      <div class="col-12">
        <p class="robot-speech-wrong" style="margin-top: 20%;">
          Mary decided to go to school. That is not a good choice when you are unwell D: You might infect your friends & teachers. 

          <span><a href="#part-5" class="btn btn-secondary btn-next-4" role="button">next</a></span>
        </p> 
      </div>
        
    </div>`;
    
    $("#pt4-consequence").html(text);

    $(".btn-next-4").on("click", function (e) {
      $("#part-5").show();
    });


  });

  //stay home
  $(".btn-pt4-home").on("click", function (e) {
    var text = `
    <div class="row">
      <div class="col-6">
        <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_2wAunq.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
      </div>

      <div class="col-6">
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_LCtDAM.json"  background="transparent"  speed="1"  style="width: 100%; height: 1005;"  loop  autoplay></lottie-player>
      </div>

      <div class="col-12">
        <p class="robot-speech-correct" style="margin-top: 20%;">
          Mary decided to go to stay home and self heal. This is a great choice :D You kept your schoolmates safe from spreading your sickness to them! YAY YOU! 

          <br>Be careful! If your fever persists, see a doctor! Remember to CALL FIRST!

          <span><a href="#part-5" class="btn btn-secondary btn-next-4" role="button">next</a></span>
        </p> 
      </div>

    </div>`;
    
    $("#pt4-consequence").html(text);

    $(".btn-next-4").on("click", function (e) {
      $("#part-5").show();
    })

  });

});
