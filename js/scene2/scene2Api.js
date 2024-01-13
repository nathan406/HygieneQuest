$(document).ready(function () {
    //---api for total numbers
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-data.p.rapidapi.com/totals",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ee93e3156cmshd871fd9954c7de3p149579jsn9b53c480eef7",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
        }
        
    };

    $.ajax(settings).done(function (response) {
        //console.log(response);

        var confirmedInfo = "";
        var deathInfo = "";
        var recoveredInfo = "";
        var updateInfo = "";

        //display total confirmed cases
        //console.log(response[0].confirmed)

        confirmedInfo = response[0].confirmed;
        deathInfo = response[0].deaths;
        recoveredInfo = response[0].recovered;
        updateInfo = response[0].lastUpdate;


        $(".facts-2-total").html(confirmedInfo);
        $(".facts-2-deaths").html(deathInfo);
        $(".facts-2-recoveries").html(recoveredInfo);
        $(".facts-2-update").html(updateInfo);
    });


});//end doc