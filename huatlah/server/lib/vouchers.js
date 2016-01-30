Meteor.methods({
  addVoucher: function(obj) {

    try {
      check(obj,voucherSchema);
      console.log(obj.fileId);
      vouchers.insert({name:obj.name,fileId:obj.fileId,quantity:obj.quantity,expire:obj.expire});

}catch(e){
  console.log(e);

  throw new Meteor.Error(e);
}


  }
});
