Template['imageview'].helpers({
});

Template['imageview'].events({
});

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
});
