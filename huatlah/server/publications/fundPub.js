Meteor.publish('fundPublisher', function () {
  return fund.find();
});
