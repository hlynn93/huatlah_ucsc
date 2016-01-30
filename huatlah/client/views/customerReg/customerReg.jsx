Template.register.rendered=function ()
{

}

Template.customerReg.helpers({
  registerSchema: function() {
    return customer;
  }
});

AutoForm.addHooks(['customerForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    }
});
