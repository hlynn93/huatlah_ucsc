vouchers = new Mongo.Collection('vouchers');


voucherSchema = new SimpleSchema({
name: {
  type: String
},
points: {
  type: Number
},
quantity: {
  type: Number
},
image_url: {
  type: String
},
customer_list: {
  type: String,
  optional: true
},
expire: {
  type: Date,
}
});


vouchers.attachSchema(voucherSchema);




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
