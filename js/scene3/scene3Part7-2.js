//part 7-2: Which mask is worn correctly?
$(document).ready(function () {
  $("#part-8").hide();

  // Which mask is worn correctly? WRONG
  $(".btn-pt7-wrong").on("click", function (e) {
    var text = `
    <!-- (2) did you know? talk about masks -->
    <div class="row">
        <div class="col-12">
            <p class="robot-speech-facts" style="margin-top: 20%;">
                DID YOU KNOW? <br><br>
                3 Kids aged 5 and under are not required to wear a mask.
            </p>
        </div>
    </div>
    <div class="row">
        
        <div class="col-12">
          <p class="robot-speech-wrong">
            This is the Wrong mask
            <br>
            <strong>It is Dirty</strong>
            <br>
            You should not wear a dirty mask.

            <span><a href="#pt7-conclusion" class="btn btn-secondary btn-sm btn-pt7-conclusion" role="button">Next</a></span>
          </p> 
        </div>
    </div>
    `;
    
    $("#pt7-consequence").html(text);

    $(".btn-pt7-conclusion").on("click", function (j) {
      var text2 = `
      
      `;
      $("#pt7-conclusion").html(text2);
      $("#part-8").show();
    });


  });

  //Which mask is worn correctly? CORRECT
  $(".btn-pt7-correct").on("click", function (e) {
    var text = `
    <!-- (2) did you know? talk about masks -->
    <div class="row">
        <div class="col-12">
            <p class="robot-speech-facts" style="margin-top: 20%;">
                DID YOU KNOW? <br><br>
                3 Kids aged 5 and under are not required to wear a mask.
            </p>
        </div>
    </div>
    <div class="row">
        
        <div class="col-12">
          <p class="robot-speech-correct" style="margin-top: 20%;">
            Peter decided to wear the clean mask
            <br>
            <strong>You should always wear a clean mask</strong>

            <span><a href="#pt7-conclusion" class="btn btn-secondary btn-sm btn-pt7-conclusion" role="button">Next</a></span>
          </p> 
        </div>
    </div>
    `;
    
    $("#pt7-consequence").html(text);

    $(".btn-pt7-conclusion").on("click", function (j) {
      var text2 = `

      `;
      $("#pt7-conclusion").html(text2);
      $("#part-8").show();
    });
  });
});