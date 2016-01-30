Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
    $(".updateButton").removeAttr("disabled");
          $(".image_url").val(fileInfo.name);
  }
});

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
