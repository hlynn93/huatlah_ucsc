// Register Route
Router.route('/retailerprofile', {
  name: 'retailerprofile',
  action: function () {
    this.render('retailerProfile');
    SEO.set({ title: 'Update Profile - ' + Meteor.App.NAME });
  }
});
