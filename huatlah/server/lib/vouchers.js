Meteor.methods({
  addVoucher: function(obj) {
      check(obj,voucherSchema);

      var v = {name:obj.name,points:obj.points,image_url:obj.image_url,quantity:obj.quantity,expire:obj.expire};
      var curUser = Meteor.user();

      var jsonArray = [];
      if(curUser.profile.voucher_list)
      {
        jsonArray = JSON.parse(curUser.profile.voucher_list);
      }
      jsonArray.push(v);
      jsonArray = JSON.stringify(jsonArray);
      Meteor.users.update(Meteor.userId(),{$set: {"profile.voucher_list": jsonArray }});

  }
});
