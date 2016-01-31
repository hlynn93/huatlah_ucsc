// Register Route
Router.route('/update_retailer_profile', {
  name: 'retailerprofile',
  action: function () {
    this.render('retailerProfile');
    SEO.set({ title: 'Update Profile - ' + Meteor.App.NAME });
  }
});
