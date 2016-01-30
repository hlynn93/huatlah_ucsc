Template.needyReg.rendered=function ()
{

}

Template.needyReg.helpers({
  registerSchema: function() {
    return needy;
  }
});

AutoForm.addHooks(['needyForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    }
});
