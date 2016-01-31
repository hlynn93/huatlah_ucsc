// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
  ,
  onBeforeAction: function () {
   if ( Meteor.user()) {
       Router.go("dashboard");
     
   }
   this.next();
 }
});
