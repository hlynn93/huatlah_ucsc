Template.header.helpers({
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
