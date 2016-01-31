

Template.view_points.helpers({

pointsSetting: function () {
  return {
      collection: points,
      rowsPerPage: 10,
      showFilter: true,
      fields: ['points','createdAt']
  };
},
});
