Meteor.startup(function () {

  Meteor.subscribe("vouchersPubisher");
  Meteor.subscribe("transactionsPublisher");


});