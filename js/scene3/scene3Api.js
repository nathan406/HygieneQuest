$(document).ready(function () {
    //---api for total numbers
    var settings = {
        "method": "GET",
        "timeout": 0,
        "headers": {
          //"Cookie": "__cfduid=d4e60a8e28f2e90c24e2a1fdcaaea8ead1611282633"
        },
        
    };

    $.ajax(settings).done(function (response) {
        //console.log(response);

        var confirmedInfo = "";
        var deathInfo = "";
        var recoveredInfo = "";
        var activeInfo = "";
        var updateInfo = "";

        //display total confirmed cases
        //console.log(response[0].confirmed)

        confirmedInfo = response.cases;
        deathInfo = response.deaths;
        recoveredInfo = response.recovered;
        activeInfo = response.active;
        updateInfo = response.updated;


        $(".facts-1-total").html(confirmedInfo);
        $(".facts-1-deaths").html(deathInfo);
        $(".facts-1-recoveries").html(recoveredInfo);
        $(".facts-1-active").html(activeInfo);
        $(".facts-1-update").html(new Date(updateInfo));
    });


});//end doc