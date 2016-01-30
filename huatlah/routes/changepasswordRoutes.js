// Register Route
Router.route('/changepassword', {
  name: 'changepassword',
  action: function () {
    this.render('changepassword');
    SEO.set({ title: 'New Password - ' + Meteor.App.NAME });
  }
});
