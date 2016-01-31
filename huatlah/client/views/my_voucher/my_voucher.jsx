Template.my_voucher.rendered=function ()
{
}


Template.my_voucher.helpers({

    'myVouchers': function() {
    return JSON.parse(Meteor.user().profile.voucher_list);
  },
    'user_id': function()
    {
      return Meteor.userId();
    }

});
