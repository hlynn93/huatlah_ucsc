Template.dashboard.rendered=function ()
{
}


Template.dashboard.helpers({

    'vouchersList': function() {
    return vouchers.find();
  }

});
