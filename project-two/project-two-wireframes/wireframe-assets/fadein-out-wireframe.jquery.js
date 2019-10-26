$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#napkin').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("The Napkin is placed to the left of the Dinner Plate. It is a bed for both the Salad and Dinner Forks.");
    $("#napkin").addClass("opaque").removeClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });

  $('#salad-fork').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("The smaller of the two forks is the Salad Fork. It is placed to the left of the Dinner Plate and on top of the Napkin. Because it will be used first, it is placed on the outside of the Dinner Fork as well.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").addClass("opaque").removeClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });

  $('#dinner-fork').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("The larger of the two forks is the Dinner Fork. It is placed to the left of the Dinner Plate and on top of the Napkin. Because it will be used second, it is placed on the inside of the Salad Fork.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").addClass("opaque").removeClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });

  $('#bread-plate').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("The Bread Plate rests to the upper left of the Dinner Plate above the Napkin and Forks. It is a bed for the Butter Knife.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").addClass("opaque").removeClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });

  $('#butter-knife').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("The Butter Knife sits diagonally atop the Bread Plate.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").addClass("opaque").removeClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });

  $('#dinner-plate').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("The Dinner Plate is the central item of a place setting. All other utensils can be placed based on their relation to the Dinner Plate.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").addClass("opaque").removeClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });

  $('#dessert-spoon').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("A Dessert Spoon is sometimes included diagonally above the Dinner Plate. It is placed out of the way because it is used last.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").addClass("opaque").removeClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });

  $('#dinner-knife').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("The Dinner Knife is placed to the direct right of the Dinner Plate. It's cutting edge always faces the Dinner Plate.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").addClass("opaque").removeClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });

  $('#soup-spoon').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("The Soup Spoon is placed to the right of both the Dinner Plate and Dinner Knife. It furthest to the right as it will be used for the first course.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").addClass("opaque").removeClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });

  $('#water-cup').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("All Cups are placed to the upper right of the Dinner Plate. The Water Cup is placed directly above the Dinner Knife and Soup Spoon making it the most accessible.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").addClass("opaque").removeClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });

  $('#red-wine').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("All Cups are placed to the upper right of the Dinner Plate. The Red Wine Glass is placed to the right of the Water Cup as it is typically served after water and before white wine.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").addClass("opaque").removeClass("transparent");
    $("#white-wine").removeClass("opaque").addClass("transparent");
  });
  $('#white-wine').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#start-info").text("All Cups are placed to the upper right of the Dinner Plate. The White Wine Glass is placed to the right of the Water Cup and the Red Wine Glass as it is typically served after both water and red wine.");
    $("#napkin").removeClass("opaque").addClass("transparent");
    $("#salad-fork").removeClass("opaque").addClass("transparent");
    $("#dinner-fork").removeClass("opaque").addClass("transparent");
    $("#bread-plate").removeClass("opaque").addClass("transparent");
    $("#butter-knife").removeClass("opaque").addClass("transparent");
    $("#dinner-plate").removeClass("opaque").addClass("transparent");
    $("#dessert-spoon").removeClass("opaque").addClass("transparent");
    $("#dinner-knife").removeClass("opaque").addClass("transparent");
    $("#soup-spoon").removeClass("opaque").addClass("transparent");
    $("#water-cup").removeClass("opaque").addClass("transparent");
    $("#red-wine").removeClass("opaque").addClass("transparent");
    $("#white-wine").addClass("opaque").removeClass("transparent");
  });

});
