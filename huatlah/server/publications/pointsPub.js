Meteor.publish('points', function () {
  return points.find();
});
