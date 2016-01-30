Template.dashboard.rendered=function ()
{

$(".balance").money();

}


Template.dashboard.helpers({

    'vouchersList': function() {
    return vouchers.find();
  },

    'user_id': function()
    {
      return Meteor.userId();
    }

});
