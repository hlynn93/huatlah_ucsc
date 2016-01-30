Template.customerProfile.rendered=function ()
{

}

Template.customerProfile.helpers({
  updateSchema: function() {
    //SimpleSchema.debug = true;
    return customer;
  }
});

AutoForm.addHooks(['customerForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    }
});
