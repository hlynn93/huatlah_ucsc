Router.route( "users/addTransaction/:id", { where: "server" } )
  .get( function() {
    // If a GET request is made, return the user's profile.
  })
  .post( function() {
    // If a POST request is made, create the user's profile.
  })
  .put( function() {
      var user_id = this.params.id;
      var data=  this.request.body;
      var moneydiff = Number(data.moneybalance);
      var pointsdiff = Number(data.rewardpoints);
      var user =  Meteor.users.findOne(user_id);

      var var_money = user.profile.moneybalance - moneydiff;
      var var_points = user.profile.rewardpoints + pointsdiff;

      Meteor.users.update(user_id,{$set:{"profile.moneybalance":var_money,"profile.rewardpoints": var_points}});
      points.insert({"customer_id":user_id,points:pointsdiff,"createdAt":new Date().valueOf()});
      this.response.setHeader( 'access-control-allow-origin', '*' );
      this.response.statusCode = 200;
      this.response.end();

  })
  .delete( function() {
   // If a DELETE request is made, delete the user's profile.
  });


Router.route( "users/addBalance/:id", { where: "server" } )
  .get( function() {
    // If a GET request is made, return the user's profile.
  })
  .post( function() {
    // If a POST request is made, create the user's profile.
  })
  .put( function() {
      var user_id = this.params.id;
      var data=  this.request.body;
      var moneydiff = Number(data.moneybalance);
      var user =  Meteor.users.findOne(user_id);

      var var_money = user.profile.moneybalance + moneydiff;


      Meteor.users.update(user_id,{$set:{"profile.moneybalance":var_money}});
      this.response.setHeader( 'access-control-allow-origin', '*' );
      this.response.statusCode = 200;
      this.response.end();

  })
  .delete( function() {
   // If a DELETE request is made, delete the user's profile.
  });
