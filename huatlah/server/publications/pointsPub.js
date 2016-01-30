Meteor.publish('pointsPublisher', function () {
  return points.find();
});
