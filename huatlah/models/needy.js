needy = new Mongo.Collection('needy');

needy.attachSchema(
    new SimpleSchema({
    name: {
      type: String
    },
    ssn: {
      type: String
    },
    coupon_quantity: {
      type: Number
    },
    retailer_list: {
      type: Date,
      denyUpdate: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  needy.allow({
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
