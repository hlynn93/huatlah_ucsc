Template.dashboard.rendered=function ()
{
  $(".balance").money();
}


Template.dashboard.helpers({
  createdAtFormatted: function () {
  return moment(this.createdAt).format('MMMM Do YYYY HH:MM a');
},
  getPoints:function()
  {
    return points.find({"customer_id":Meteor.userId()} ,{sort: {'createdAt' : -1}, limit:3 });
  },
  getTransactions:function()
  {
    return transactions.find({"customer_id":Meteor.userId()} ,{sort: {'createdAt' : -1}, limit:3 });
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
    return vouchers.find({},{sort: {'createdAt' : -1},limit:6 });
  },
    'latestVouchers': function() {
    return JSON.parse(Meteor.user().profile.voucher_list);
  },


    'user_id': function()
    {
      return Meteor.userId();
    }

});
