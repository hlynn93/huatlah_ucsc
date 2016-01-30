Template.topup.rendered=function ()
{


  $( ".topupButton" ).click(function() {

    var number = $(this).val();
    $("input[name='amount']").val(number);


});

}

Template.topup.helpers({
  topupSchema_client: function() {
    SimpleSchema.debug = true;
    return topupSchema;
  }
});

AutoForm.addHooks(['topupForm'],{
    onSuccess: function(formType, result) {
        Router.go("dashboard");
    }
});
