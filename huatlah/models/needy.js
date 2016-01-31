needy = new Mongo.Collection('needy');
needySchema = new SimpleSchema({
    name: {
      type: String
    },
    phone: {
      type: String,
      decimal: false,
      optional: true,
      custom: function () {
          if (this.value < 1000000000 || this.value > 9999999999)  {
              return ("phoneMismatch");
          }
      }
    },
    mailaddress: {
      type: String
    },
    ID_number: {
      type: string
    },
    email:{
      type: String
    },
    coupon_quantity: {
      type: Number,
      optional:true
    },
    retailer_list: {
      type: Date,
      denyUpdate: true,
      optional:true,
    }
  });
needy.attachSchema(needySchema
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

needy.messages({
"phoneMismatch": "Please input a valid phone number!",
});
