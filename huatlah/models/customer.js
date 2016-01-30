customer = new SimpleSchema({

    name: {
      type: String,
      optional: true,
    },

    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    },

    phone: {
      type: String,
      decimal: false,
      custom: function () {
          if (this.value < 1000000000 || this.value > 9999999999)  {
              return ("phoneMismatch");
          }
      }
    },

    password: {
      type: String
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
      optional: true
    },

    moneybalance: {
      type: [Number],
      optional: true

    },

    voucher_list: {
      type: String,
      optional: true
    },

    transaction_list: {
      type: String,
      optional: true
    },

    meal_name: {
      type: String,
      optional: true
    },

    needy_list: {
      type: String,
      optional: true
    },

  });

  if (Meteor.isServer) {
      var Api = new Restivus({
        prettyJson: true
      });
      Api.addCollection(Meteor.users);
  }

/*
* custom errors message for autoform
* we use it for the error 'passwordMismatch', since it is a
* custom validation and autoform have no predefined messages for it
*/

customer.messages({
"passwordMismatch": "Passwords do not match! Try again!",
"phoneMismatch": "Please input a valid phone number!",
});
