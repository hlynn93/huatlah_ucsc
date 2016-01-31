Template.dashboard.rendered=function ()
{
  $(".balance").money();
}


Template.dashboard.helpers({
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
  settings: function () {
    return {
        collection: transactions,
        rowsPerPage: 3,
        showFilter: false,
        fields: [ 'actualAmount', 'diffAmount','createdAt']
    };
},
  pointsSetting: function () {
    return {
        collection: points,
        rowsPerPage: 3,
        showFilter: false,
        fields: ['points','createdAt']
    };
},

    'user_id': function()
    {
      return Meteor.userId();
    }

});
