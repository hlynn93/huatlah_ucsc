// Register Route
Router.route('/updateyourprofile', {
  name: 'customerprofile',
  action: function () {
    this.render('customerProfile');
    SEO.set({ title: 'Update Profile - ' + Meteor.App.NAME });
  }
});
