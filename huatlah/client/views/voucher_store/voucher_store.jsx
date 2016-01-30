Template.voucher_store.rendered=function ()
{

}

Template.voucher_store.helpers({
  topupSchema_client: function() {
    return topupSchema;
  }
});

AutoForm.addHooks(['topupForm'],{
    onSuccess: function(formType, result) {
        alert("Successfully Topup!");
        Router.go("dashboard");
    }
});
