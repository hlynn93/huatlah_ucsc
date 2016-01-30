Meteor.publish('retailerPublisher', function () {
  return retailer.find();
});
