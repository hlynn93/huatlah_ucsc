Template.retailerProfile.rendered=function ()
{

}

Template.retailerProfile.helpers({
  updateSchema: function() {
    //SimpleSchema.debug = true;
    return customer;
  }
});

AutoForm.addHooks(['retailerForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    }
});
