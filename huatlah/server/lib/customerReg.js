Meteor.methods({
  register: function(Obj) {
    // Important server-side check for security and data integrity
    check(Obj,customer);

    // Create a new user into Meteor.users
    //https://github.com/aldeed/meteor-autoform#a-basic-insert-form
    Accounts.createUser({
    email: Obj.email,
    password: Obj.password,
    profile: {
            name: "",
            phone: "",
            rewardpoints: 0,
            moneybalance: 0,
            // 1: customers, 2: retailers, 3: needy
            type: '1',
        }
      });
  }
});
