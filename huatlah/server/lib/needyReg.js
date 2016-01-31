Meteor.methods({
  needyRegister: function(Obj) {
    // Important server-side check for security and data integrity
    check(Obj,needySchema);

    // Create a new user into Meteor.users
    //https://github.com/aldeed/meteor-autoform#a-basic-insert-form
    needy.insert({
      name: Obj.name,
      mailaddress: Obj.mailaddress,
      phone: Obj.phone,
      ID_number: Obj.ID_number,
      email: Obj.email,
      coupon_quantity: 3

      });
  }
});
