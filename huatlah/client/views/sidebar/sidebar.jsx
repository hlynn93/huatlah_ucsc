Template.sidebar.rendered=function ()
{

}

Template.sidebar.helpers({

});


Template.sidebar.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout(function(){
        Router.go("/");
      });
    }
});
