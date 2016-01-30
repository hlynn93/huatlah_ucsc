Meteor.methods({
  topup: function(obj) {
    console.log("test");

    // Important server-side check for security and data integrity
    check(obj,topupSchema);
    if( Meteor.userId())
    {
      console.log("test2");

       Meteor.users.update(Meteor.userId(), {$set: {"profile.moneybalance": obj.amount} });

}

  }
});
