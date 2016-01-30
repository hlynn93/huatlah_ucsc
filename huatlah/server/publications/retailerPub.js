Meteor.publish('retailer', function () {
  return retailer.find();
});
