Meteor.publish('vouchersPublisher', function () {
  return vouchers.find();
});

Meteor.publish('images', function() {
  return Images.find();
});
