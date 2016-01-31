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
  getFund:function()
  {
    return fund.findOne("1").amount.toFixed(2);
  },
  emailAddress:function()
  {
    return Meteor.user().emails[0].address;
  },
  getTypePerson:function()
  {
    var type = Meteor.user().profile.type;

    if(type == "1")
    {
      return "Customer";
    }
    else if(type == "2")
    {
      return "Retailer";

    }
    else if(type == "3")
    {
      return "";

    }
    else if(type == "4")
    {
      return "Administrator";

    }

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
