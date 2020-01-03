$( ".top" ).scroll(function() {
    if($(element).height() === "00px") {
        // remove scroll fixed
        $(scroll).css("position","relative") //or use absolute also.
    }
});
