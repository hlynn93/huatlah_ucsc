fund = new Mongo.Collection('fund');

fund.attachSchema(
    new SimpleSchema({
    amount: {
      type: Number
    },
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  fund.allow({
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

  var Api = new Restivus({
    prettyJson: true
  });
  Api.addCollection(fund);

}
