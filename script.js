$(function() {
  $("form[name='registrationForm']").validate({
      rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 11
      },
	  
	  number: {
        required: true,
        minlength: 4
      }
	  
	  
    },
      messages: {
      firstname: "Please enter full name",
     
      password: {
        required: "Please provide contact number",
        minlength: "Must be at least 11 digits long"
      },
      
	  number: {
        required: "Please provide property ID",
        minlength: "Must be at least 4 digits long"
      },
	  
	  email: "Please enter valid email address"
    },
     submitHandler: function(form) {
      form.submit();
    }
  });
});