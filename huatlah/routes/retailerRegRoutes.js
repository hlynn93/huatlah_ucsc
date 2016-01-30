// Register Route
Router.route('/welcome_onboard', {
  name: 'retailer',
  action: function () {
    this.render('retailerReg');
    SEO.set({ title: 'Register - ' + Meteor.App.NAME });
  }
});
