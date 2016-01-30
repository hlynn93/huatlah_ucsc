// needy registration is based on customer.js as model.
// if there is no use of this model, please delete it

needy = new Mongo.Collection('needy');

needy.attachSchema(new SimpleSchema({
    customer_id:
      {
        type:Number
      },
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

  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });
  Api.addCollection(needy);

}
