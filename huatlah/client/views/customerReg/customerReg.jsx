Template.customerReg.rendered=function ()
{

}

Template.customerReg.helpers({
  registerSchema: function() {
    SimpleSchema.debug = true;
    return customer;
  }
});

AutoForm.addHooks(['customerForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    }
});
