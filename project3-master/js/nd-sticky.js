/*!
 * Sticky-kit
 * A jQuery plugin for making smart sticky elements
 *
 * Source: http://leafo.net/sticky-kit/
 */

$("#intro_title").stick_in_parent({
    // offset_top: 10,
    // offset_left: 100
});

$("#when_title").stick_in_parent({
     // offset_top: 10
});

$("#water_title").stick_in_parent({
    // offset_top: 10
    spacer:false
});

$("#soil_title").stick_in_parent({
    // offset_top: 10
});

$("#shelter_title").stick_in_parent({
    // offset_top: 10
});

$("#kale_title").stick_in_parent({
    // offset_top: 10
});

$("#conclusion_title").stick_in_parent({
    // offset_top: 10
});

jQuery(document).ready(function(){
    var window_width = jQuery( window ).width();

    if (window_width < 500) {
      jQuery("#intro_title").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }

    jQuery( window ).resize(function() {

      window_width = jQuery( window ).width();

      if (window_width < 500) {
        jQuery("#intro_title").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }

    });

    function make_sticky() {
      jQuery("#intro_title").stick_in_parent({
        parent: '.entry-content'
      });
    }
});

jQuery(document).ready(function(){
    var window_width = jQuery( window ).width();

    if (window_width < 500) {
      jQuery("#when_title").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }

    jQuery( window ).resize(function() {

      window_width = jQuery( window ).width();

      if (window_width < 500) {
        jQuery("#when_title").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }

    });

    function make_sticky() {
      jQuery("#when_title").stick_in_parent({
        parent: '.entry-content'
      });
    }
});

jQuery(document).ready(function(){
    var window_width = jQuery( window ).width();

    if (window_width < 500) {
      jQuery("#water_title").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }

    jQuery( window ).resize(function() {

      window_width = jQuery( window ).width();

      if (window_width < 500) {
        jQuery("#water_title").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }

    });

    function make_sticky() {
      jQuery("#water_title").stick_in_parent({
        parent: '.entry-content'
      });
    }
});

jQuery(document).ready(function(){
    var window_width = jQuery( window ).width();

    if (window_width < 500) {
      jQuery("#soil_title").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }

    jQuery( window ).resize(function() {

      window_width = jQuery( window ).width();

      if (window_width < 500) {
        jQuery("#soil_title").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }

    });

    function make_sticky() {
      jQuery("#soil_title").stick_in_parent({
        parent: '.entry-content'
      });
    }
});

jQuery(document).ready(function(){
    var window_width = jQuery( window ).width();

    if (window_width < 500) {
      jQuery("#shelter_title").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }

    jQuery( window ).resize(function() {

      window_width = jQuery( window ).width();

      if (window_width < 500) {
        jQuery("#shelter_title").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }

    });

    function make_sticky() {
      jQuery("#shelter_title").stick_in_parent({
        parent: '.entry-content'
      });
    }
});

jQuery(document).ready(function(){
    var window_width = jQuery( window ).width();

    if (window_width < 500) {
      jQuery("#kale_title").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }

    jQuery( window ).resize(function() {

      window_width = jQuery( window ).width();

      if (window_width < 500) {
        jQuery("#kale_title").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }

    });

    function make_sticky() {
      jQuery("#kale_title").stick_in_parent({
        parent: '.entry-content'
      });
    }
});

jQuery(document).ready(function(){
    var window_width = jQuery( window ).width();

    if (window_width < 500) {
      jQuery("#conclusion_title").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }

    jQuery( window ).resize(function() {

      window_width = jQuery( window ).width();

      if (window_width < 500) {
        jQuery("#conclusion_title").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }

    });

    function make_sticky() {
      jQuery("#conclusion_title").stick_in_parent({
        parent: '.entry-content'
      });
    }
});
