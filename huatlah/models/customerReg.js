customerReg = new Mongo.Collection('customerReg');

customerReg.attachSchema(
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
  customerReg.allow({
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
