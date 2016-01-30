vouchers = new Mongo.Collection('vouchers');
voucherSchema = new SimpleSchema({
name: {
  type: String
},
quantity: {
  type: Number
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

Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")]
});

Files.allow({
  download: function () {
    return true;
  },
  fetch: null
});


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
