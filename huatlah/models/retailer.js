retailer = new Mongo.Collection('retailer');

retailer.attachSchema(
    new SimpleSchema({
    name: {
      type: String
    },
    meal_name: {
      type: String
    },
    needy_list: {
      type: String
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  retailer.allow({
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
