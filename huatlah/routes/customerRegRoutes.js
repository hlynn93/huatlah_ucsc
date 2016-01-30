// Register Route
Router.route('/register', {
  name: 'customer',
  action: function () {
    this.render('customerReg');
    SEO.set({ title: 'Register - ' + Meteor.App.NAME });
  }
});
