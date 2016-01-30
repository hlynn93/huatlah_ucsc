Meteor.methods({
  changepwd: function(event) {
    var oldpwd = event.oldpassword.value;
    var pwd = event.password.value;
    console.log(oldpwd);
    Accounts.changePassword(oldpwd,pwd);
      }
});
