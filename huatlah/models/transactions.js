transactions = new Mongo.Collection('transactions');

transactions.attachSchema(
    new SimpleSchema({
    customer_id: {
      type: String
    },
    totalAmount: {
      type: Number,
      decimal:true
    },
    actualAmount: {
      type: Number,
      decimal:true
    },
    diffAmount: {
      type: Number,
      decimal:true
    },
    createdAt: {
      type: Date
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
