Template.needyReg.rendered=function ()
{

}

Template.needyReg.helpers({
  needySchema: function() {
    SimpleSchema.debug = true;
    return needySchema;
  }
});

AutoForm.addHooks(['needyForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    }
});
