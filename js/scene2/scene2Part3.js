//part 3: story of the previous the night (why mary got sick)

$(document).ready(function () {
//hide parts
$(".question-pt3-2").hide();
$(".question-pt3-3").hide();
$(".question-pt3-4").hide();
$(".question-pt3-5").hide();
$("#text-pt3-conclusion").hide();


//show what mary is doing at (1) 8pm, (2) 9pm, (3) 12pm, (4) 4am, (5) 6am

//(1) 8pm
$(".btn-pt3-1").on("click", function (e) {
  var text = `
  <div class="row">
      <div class="col-8">
        <p class="robot-speech" style="margin-top: 20%;">
          8pm: Mary just bought a new game! She has been waiting in line for 3 hours to get it.
        </p> 
      </div>

      <div class="col-4">
        <lottie-player src="https://assets8.lottiefiles.com/temp/lf20_Ny9gY0.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
      </div>
  </div>
  `;
  
  $("#text-pt3-1").html(text);
  $(".question-pt3-2").show();

});

//(2) 9pm
$(".btn-pt3-2").on("click", function (e) {
  var text = `
  <div class="row">
      <div class="col-8">
        <p class="robot-speech" style="margin-top: 20%;">
          9pm: Mary just reached home. Now she can finally start playing the game!
        </p> 
      </div>

      <div class="col-4">
        <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_lnlbyoqx.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
      </div>
  </div>
  `;
    
  $("#text-pt3-2").html(text);
  $(".question-pt3-3").show();
  
});

//(3) 12am
$(".btn-pt3-3").on("click", function (e) {
  var text = `
  <div class="row">
      <div class="col-8">
        <p class="robot-speech" style="margin-top: 20%;">
          12am: Mary got hungry. She wanted to take a quick snack and was caught by her mom. Oh No! She told her to sleep. But did she? 
        </p> 
      </div>

      <div class="col-4">
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_gxgrqqqp.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
      </div>
  </div>
  `;
  
  $("#text-pt3-3").html(text);
  $(".question-pt3-4").show();
  
});

//(4) 4am
$(".btn-pt3-4").on("click", function (e) {
  var text = `
  <div class="row">
    <div class="col-8">
      <p class="robot-speech" style="margin-top: 20%;">
        4am: Well well well. She didn't. Luckily, her mom didn't come in to check in on her. When will she sleep? She has school in 3 hours.
      </p> 
    </div>

    <div class="col-4">
      <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_w5puR3.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
    </div>
  </div>
  `;
  
  $("#text-pt3-4").html(text);
  $(".question-pt3-5").show();

});

//(5) 6am
$(".btn-pt3-5").on("click", function (e) {
  var text = `
  <div class="row">
      <div class="col-8">
        <p class="robot-speech" style="margin-top: 20%;">
          6am: Finally! She is asleep. But her mom is knocking her door waking her up for school. But oh no! She was burning up & felt weak. She got sick! Oh No!
        </p> 
      </div>

      <div class="col-4">
        <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_J6IlZp.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
      </div>
  </div>

  <div class="row">
      <div class="col-12">
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ip6yukgk.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
      </div>

  </div>`;
  
  $("#text-pt3-5").html(text);
  $("#text-pt3-conclusion").show();
  
});


});
