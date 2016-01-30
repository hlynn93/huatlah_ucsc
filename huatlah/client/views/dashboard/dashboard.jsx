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

    'user_id': function()
    {
      return Meteor.userId();
    }

});
