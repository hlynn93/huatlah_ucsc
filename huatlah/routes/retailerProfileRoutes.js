// Register Route
Router.route('/update_retailer_profile', {
  name: 'retailerprofile',
  action: function () {
    this.render('retailerProfile');
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
