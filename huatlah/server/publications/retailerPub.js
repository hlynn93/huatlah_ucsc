Meteor.publish('retailerPubisher', function () {
  return retailer.find();
});
