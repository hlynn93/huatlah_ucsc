Template.changepassword.rendered=function ()
{

}

Template.changepassword.helpers({
  registerSchema: function() {
    //SimpleSchema.debug = true;
    return customer;
  }
});

AutoForm.addHooks(['changepasswordForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    }
});
