Template.voucher_store.rendered=function ()
{

}

Template.voucher_store.helpers({
  topupSchema_client: function() {
    return topupSchema;
  },
  'vouchersList': function() {
  return vouchers.find();
},
'user_id': function()
{
  return Meteor.userId();
}

});
