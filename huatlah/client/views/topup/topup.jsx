Template.topup.rendered=function ()
{

}

Template.topup.helpers({
  topupSchema_client: function() {
    SimpleSchema.debug = true;
    return topupSchema;
  }
});

AutoForm.addHooks(['topupForm'],{
    onSuccess: function(formType, result) {
        alert("Successfully Topup!");
        Router.go("dashboard");
    }
});
