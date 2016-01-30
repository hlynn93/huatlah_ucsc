Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
    $(".addVoucherButton").removeAttr("disabled");
          $(".image_url").val(fileInfo.name);
  }
});

Template.voucher_store_add.helpers({

  voucherStoreAddSchema_client: function() {
    return voucherSchema;
  }
});

AutoForm.addHooks(['voucherStoreAddForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    },


});
