Meteor.publish('vouchersPubisher', function () {
  return vouchers.find();
});
