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
      optional: true,

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
      type: Number,
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

  });

/*
* custom errors message for autoform
* we use it for the error 'passwordMismatch', since it is a
* custom validation and autoform have no predefined messages for it
*/

customer.messages({
"passwordMismatch": "Passwords do not match! Try again!",
});
