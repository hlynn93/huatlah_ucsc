Template.retailerReg.rendered=function ()
{

}

Template.retailerReg.helpers({
  registerSchema: function() {
    return customer;
  }
});

AutoForm.addHooks(['retailerForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    }
});
