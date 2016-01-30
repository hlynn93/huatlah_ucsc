Meteor.methods({
  addVoucher: function(obj) {
      check(obj,voucherSchema);
      vouchers.insert({name:obj.name,points:obj.points,image_url:obj.image_url,quantity:obj.quantity,expire:obj.expire});
  }
});
