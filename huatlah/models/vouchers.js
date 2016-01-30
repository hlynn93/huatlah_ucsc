vouchers = new Mongo.Collection('vouchers');

var Images;
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

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
},
profilePic: {
     type: String,
     label: 'Profile Picture',
     autoform: {
          afFieldInput: {
               type: 'fileUpload',
               collection: 'Images'
          }
     }
}
});



Images.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return true;
  },
  download: function(userId) {
    return true;
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
