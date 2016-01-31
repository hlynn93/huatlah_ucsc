

Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
    $(".addVoucherButton").prop("disabled", false);
    $(".image_url").val(fileInfo.name);
  }
});

Template.customerProfile.helpers({
  updateSchema: function() {
    return customer;
  }
});

AutoForm.addHooks(['retailerProfileForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    }
});
