Meteor.methods({
  addVoucher: function(obj) {
      check(obj,voucherSchema);
      vouchers.insert({name:obj.name,image_url:obj.image_url,quantity:obj.quantity,expire:obj.expire});
  }
});
