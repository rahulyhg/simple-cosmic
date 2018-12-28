// JavaScript Document


// function to show/hide the nav for phone version of site

jQuery(document).ready(function()
{
  //toggle the component with the specified class/id
  jQuery(".nav-icon").click(function()
  		{
    	jQuery(".nav").slideToggle(400);
		return false;
  		});
});


//initiate validator on load
jQuery(document).ready(function($) {

// this stuff is for the Notify Bar plugin page
// toggle the faq-answer so it will show/hide as needed
  jQuery(".faq-question").click(function()
  {
    jQuery(this).next(".faq-answer").slideToggle(300);
	return false;
});

// validate contact form on keyup and submit
jQuery(".validate").validate({
// set the rules for the field names
rules: {
sendername: {
required: true,
minlength: 2
},
senderemail: {
required: true,
email: true
},
message: {
required: true,
minlength: 2
},
gatecheck: {
required: true
}
},
//set messages to appear inline
messages: {
sendername: "Please enter your name.",
senderemail: "Please enter a valid email address.",
message: "Please enter your message.",
gatecheck: "Please answer the spam filter question."
}
});
});
