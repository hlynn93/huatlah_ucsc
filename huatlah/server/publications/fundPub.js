Meteor.publish('fund', function () {
  return needy.find();
});
