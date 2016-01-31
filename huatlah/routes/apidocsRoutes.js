// Home Route
Router.route('/apidocs', {
  name: 'apidocs',
  action: function () {
    this.render('apidocs');
    SEO.set({ title: 'API References - ' + Meteor.App.NAME });
  }
});
