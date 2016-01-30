Meteor.publish('vouchers', function () {
  return vouchers.find();
});
