Template.voucher_store_add.rendered=function ()
{

}

Template.voucher_store_add.helpers({
  voucherStoreAddSchema_client: function() {
    return voucherSchema;
  }
});

AutoForm.addHooks(['voucherStoreAddForm'],{
    onSuccess: function(formType, result) {
        alert("Successfully Topup!");
        Router.go("dashboard");
    }
});
