Meteor.methods({
  changepwd: function(event) {
    var oldpwd = event.oldpassword.value;
    var pwd = event.password.value;
    Accounts.changePassword(oldpwd,pwd);
      }
});
