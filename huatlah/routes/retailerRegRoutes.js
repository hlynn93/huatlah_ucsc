// Register Route
Router.route('/retailerRegistration', {
  name: 'retailer',
  action: function () {
    this.render('retailerReg');
    SEO.set({ title: 'Register - ' + Meteor.App.NAME });
  }
});
