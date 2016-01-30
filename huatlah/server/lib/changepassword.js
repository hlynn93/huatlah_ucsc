Meteor.methods({
  changepwd: function(obj) {
    console.log(obj.oldpassword.value);
    Accounts.changePassword(obj.oldpassword.value,obj.password.value;
      }
});
