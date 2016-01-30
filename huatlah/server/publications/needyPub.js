Meteor.publish('needyPublisher', function () {
  return needy.find();
});
