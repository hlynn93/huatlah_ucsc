Meteor.publish('vouchersPublisher', function () {
  return vouchers.find();
});
