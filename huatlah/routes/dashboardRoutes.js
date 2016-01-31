// Home Route
Router.route('/dashboard', {
  name: 'dashboard',
  action: function () {
    this.render('dashboard');
    SEO.set({ title: 'Dashboard - ' + Meteor.App.NAME });
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
