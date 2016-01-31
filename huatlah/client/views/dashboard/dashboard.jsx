Template.dashboard.rendered=function ()
{
  $(".balance").money();
}


Template.dashboard.helpers({
  createdAtFormatted: function () {
  return moment(this.createdAt).format('DD/MM/YYYY');
},
  getPoints:function()
  {
    return points.find({} ,{limit: 3});
  },
  getTransactions:function()
  {
    return transactions.find({} ,{limit: 3});
  },
  isAdmin:function()
  {
    return (Meteor.user().profile.type == "4")
  },
  isCustomer:function()
  {
    return (Meteor.user().profile.type == "1")
  },
  isRetailer:function()
  {
    return (Meteor.user().profile.type == "2")
  },
    'vouchersList': function() {
    return vouchers.find();
  },
    'latestVouchers': function() {
    return JSON.parse(Meteor.user().profile.voucher_list);
  },


    'user_id': function()
    {
      return Meteor.userId();
    }

});
