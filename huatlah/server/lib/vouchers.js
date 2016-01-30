Meteor.methods({
  addVoucher: function(obj) {
    check(obj,voucherSchema);


    vouchers.insert({name:obj.name,image:obj.image,quantity:obj.quantity,expire:obj.expire});
    // vouchers.insert({name:obj.name,image:obj.image,quantity:obj.quantity,expire:obj.expire});

  }
});
