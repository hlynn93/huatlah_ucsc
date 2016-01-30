Meteor.methods({
  topup: function(obj) {
    // Important server-side check for security and data integrity
    check(obj,topupSchema);

    if( Meteor.userId())
    {

       Meteor.users.update(Meteor.userId(), {$set: {balance: obj.amount} });

}

  }
});
