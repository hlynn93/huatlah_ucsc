Meteor.publish('customerPublisher', function () {
  return customer.find();
});
