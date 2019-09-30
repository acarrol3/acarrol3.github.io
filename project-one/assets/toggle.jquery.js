$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#button1').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#letter-analysis").removeClass("invisible");
        $("#arrow").addClass("invisible");
        $("#large-letter-analysis").removeClass("invisible");
        $("#large-letter").addClass("invisible");
        $("#button2").removeClass("invisible");
        $("#button1").addClass("invisible");
        });

});

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#button2').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#letter-analysis").addClass("invisible");
        $("#arrow").removeClass("invisible");
        $("#large-letter-analysis").addClass("invisible");
        $("#large-letter").removeClass("invisible");
        $("#button2").addClass("invisible");
        $("#button1").removeClass("invisible");
        });

});
