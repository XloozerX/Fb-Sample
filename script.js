$(document).ready(function(){
    $("#signup-form").validate({
      rules:{
        fname:{
           required:true,
           minlength:4,
           maxlength:8

        },
        emailaddress:{
           required:true,
           email:true
        },
        password:{
            minlength:6
        },
        Day:{
            required:true
        }
        },
        messages:{
            fname:{
            required:"Enter first name",
            minlength:"Enter atleast 4 characters"
            }
        }
    })
})