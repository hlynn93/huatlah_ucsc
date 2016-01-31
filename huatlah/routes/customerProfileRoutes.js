// Register Route
Router.route('/update_customer_profile', {
  name: 'customerprofile',
  action: function () {
    this.render('customerProfile');
    SEO.set({ title: 'Update Profile - ' + Meteor.App.NAME });
  },
  onBeforeAction: function () {
   if (! Meteor.user()) {
     if (Meteor.loggingIn()) {
     }
     else{
       Router.go('login');
     }
   }
 }
});
