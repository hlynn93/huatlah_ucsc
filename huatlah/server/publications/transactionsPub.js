Meteor.publish('transactionsPublisher', function () {
  return transactions.find();
});

Meteor.publish('transactionsLimitPublisher', function () {
  return transactions.find({limit: 10});
});
