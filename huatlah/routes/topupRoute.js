// Home Route
Router.route('/topup', {
  name: 'topup',
  action: function () {
    this.render('topup');
    SEO.set({ title: 'Topup - ' + Meteor.App.NAME });
  },
  onBeforeAction: function () {
   if (! Meteor.user()) {
     if (Meteor.loggingIn()) {
     }
     else{
       Router.go('login');
     }
   }
   this.next();

 }
});
