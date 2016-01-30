Router.route( "users/update/:id", { where: "server" } )
  .get( function() {
    // If a GET request is made, return the user's profile.
  })
  .post( function() {
    // If a POST request is made, create the user's profile.
  })
  .put( function() {
    console.log("put");
    var id = this.params.id;
    var data=  this.request.body;
    Meteor.users.update(id,{$set:{"profile.moneybalance":Number(data.moneybalance),"profile.rewardpoints":Number(data.rewardpoints) }});
    this.response.setHeader( 'access-control-allow-origin', '*' );
    this.response.statusCode = 200;
    this.response.end();

  })
  .delete( function() {
   // If a DELETE request is made, delete the user's profile.
  });
