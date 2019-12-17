jQuery(function(){
  // Target
  var $target = $('body');

// important code section

        //end of important code section for taking the user to a specific section horizontally on click

        $('#button-intro').click(function() {
        $target.scrollTo($('#intro') , 800);
  });

        $('#button-when').click(function() {
        $target.scrollTo($('#when') , 800);
  });

        $('#button-mining').click(function() {
        $target.scrollTo($('#mining') , 800);
  })

  $('#button-shelter').click(function() {
  $target.scrollTo($('#shelter') , 800);
})

$('#button-soil').click(function() {
$target.scrollTo($('#soil') , 800);
})

$('#button-kale').click(function() {
$target.scrollTo($('#kale') , 800);
})

});
