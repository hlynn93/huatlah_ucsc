customer = new Mongo.Collection('customer');

customer.attachSchema(
    new SimpleSchema({
    name: {
      type: String,
    },
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
    },
    passwordConfirmation: {
        type: String,
        // this is a custom validation to ensure the password match
        custom: function () {
            if (this.value !== this.field('password').value) {
                return ("passwordMismatch");
            }
        }
    },
    rewardpoints: {
      type: Number,
    },
    moneybalance: {
      type: Number,
    },
    voucher_list: {
      type: String,
    },
    transaction_list: {
      type: String,
    },
  })
);

/*
* custom errors message for autoform
* we use it for the error 'passwordMismatch', since it is a
* custom validation and autoform have no predefined messages for it
*/

customer.messages({
"passwordMismatch": "Passwords do not match! Try again!",
});


if (Meteor.isServer) {
  customer.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
