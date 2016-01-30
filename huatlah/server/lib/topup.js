Meteor.methods({
  topup: function(obj) {

    // Important server-side check for security and data integrity
    check(obj,topupSchema);
    if( Meteor.userId())
    {

       Meteor.users.update(Meteor.userId(), {$set: {"profile.moneybalance": Meteor.user().profile.moneybalance+obj.amount} });

}

  }
});
