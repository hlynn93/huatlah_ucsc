Template.view_transactions.helpers({


settings: function () {
  return {
      collection: transactions,
      rowsPerPage: 10,
      showFilter: true,
      fields: [ 'actualAmount', 'diffAmount','createdAt']
  };
},

});
