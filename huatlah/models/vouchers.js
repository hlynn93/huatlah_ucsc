vouchers = new Mongo.Collection('vouchers');

vouchers.attachSchema(
  new SimpleSchema({
  name: {
    type: String
  },
  quantity: {
    type: String
  },
  customer_list: {
    type: String
  },
  expire: {
    type: Date,
    denyUpdate: true
  }
})
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  vouchers.allow({
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
