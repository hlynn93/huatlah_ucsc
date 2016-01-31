Template.sidebar.rendered=function ()
{

}

Template.sidebar.helpers({
  isAdmin:function()
  {
    return (Meteor.user().profile.type == "4")
  },
  isCustomer:function()
  {
    return (Meteor.user().profile.type == "1")
  },
  isRetailer:function()
  {
    return (Meteor.user().profile.type == "2")
  },

});


Template.sidebar.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout(function(){
        Router.go("/");
      });
    }
});
