Meteor.publish('customer', function () {
  return needy.find();
});
