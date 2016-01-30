Meteor.publish('needy', function () {
  return needy.find();
});
