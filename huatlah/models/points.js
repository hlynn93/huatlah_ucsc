points = new Mongo.Collection('points');

points.attachSchema(
    new SimpleSchema({
    customer_id: {
      type: Number
    },
    points: {
      type: Number
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  points.allow({
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
