transactions = new Mongo.Collection('transactions');

transactions.attachSchema(
    new SimpleSchema({
    title: {
      type: String
    },
    value: {
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
  transactions.allow({
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
