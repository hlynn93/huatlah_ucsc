Meteor.publish('transactionsPublisher', function () {
  return transactions.find();
});
