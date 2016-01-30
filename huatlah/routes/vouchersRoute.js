// Home Route
Router.route('/vouchers', {
  name: 'vouchers',
  action: function () {
    this.render('voucher_store');
    SEO.set({ title: 'Grab your Vouchers - ' + Meteor.App.NAME });
  }
});

Router.route('/add_voucher', {
  name: 'add_voucher',
  action: function () {
    this.render('voucher_store_add');
    SEO.set({ title: 'Add Voucher - ' + Meteor.App.NAME });
  }
});


Router.route("/redeem/:id/:user_id", function() {
  var id =  this.params.id;
  var v = vouchers.findOne(id);

  var user_id =  this.params.user_id;
  var curUser = Meteor.users.findOne(user_id);
  var profilePoints = curUser.profile.rewardpoints;

  if(profilePoints > 0 && profilePoints >= v.points)
  {
      Meteor.users.update(user_id,{$set: {"profile.rewardpoints": profilePoints  - v.points} });
  }
  this.response.writeHead(302, {
    'Location':  '/dashboard'
  });
  this.response.end();

}, { where: "server" });
