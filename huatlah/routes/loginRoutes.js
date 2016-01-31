Router.route('/login', {
  name: 'login',
  action: function () {
    this.render('login');
    SEO.set({ title: 'Login - ' + Meteor.App.NAME });
  },
  onBeforeAction: function () {
   if (Meteor.user()) {
       Router.go('dashboard');
     }
   this.next();
 }
});
