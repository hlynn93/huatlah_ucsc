Template.dashboard.rendered=function ()
{
  $(".balance").money();
}


Template.dashboard.helpers({

    'vouchersList': function() {
    return vouchers.find();
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
