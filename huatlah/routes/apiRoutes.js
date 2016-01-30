Router.route( "users/:name/profile/update", function() {
  var name    = this.params.name,
      data    = this.request.body,
      getUser = Meteor.users.findOne( { "profile.username": name } );

  Meteor.users.update( {
    "_id": getUser._id }, {
    $set: {
      "profile": data
    }
  });
}, { where: "server" });
