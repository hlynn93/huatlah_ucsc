Meteor.startup(function () {

  Meteor.subscribe("vouchersPublisher");
  Meteor.subscribe("transactionsPublisher");


});
