// Home Route
Router.route('/topup', {
  name: 'topup',
  action: function () {
    this.render('topup');
    SEO.set({ title: 'Topup - ' + Meteor.App.NAME });
  }
});
