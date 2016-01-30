customer = new Mongo.Collection('customer');

customer.attachSchema(
    new SimpleSchema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: Number
    },
    password: {
      type: String
    },
    rewardpoints: {
      type: Number
    },
    moneybalance: {
      type: Number
    },
    voucher_list: {
      type: String
    },
    transaction_list: {
      type: String
    },
  })
);

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
