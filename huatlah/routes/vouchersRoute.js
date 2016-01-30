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


Router.route("redeem/:id", function() {
  var id =  this.params.id;
  var v = vouchers.find(id);
var curUser = Meteor.users.findOne(this.userId);
  Meteor.users.update(
    curUser._id,
    {$set: {"profile.rewardpoints": curUser.profile.rewardpoints - v.points} });


}, { where: "server" });
