// Register Route
Router.route('/needyRegistration', {
  name: 'needy',
  action: function () {
    this.render('needyReg');
    SEO.set({ title: 'Register - ' + Meteor.App.NAME });
  }
});
