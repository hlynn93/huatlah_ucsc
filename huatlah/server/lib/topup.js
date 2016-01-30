Meteor.methods({
  topup: function(Obj) {
    // Important server-side check for security and data integrity
    check(Obj,customer);

    

  }
});
