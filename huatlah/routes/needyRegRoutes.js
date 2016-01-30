// Register Route
Router.route('/needyregistration', {
  name: 'needy',
  action: function () {
    this.render('needyReg');
    SEO.set({ title: 'Register - ' + Meteor.App.NAME });
  }
});
