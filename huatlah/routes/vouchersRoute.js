// Home Route
Router.route('/vouchers', {
  name: 'vouchers',
  action: function () {
    this.render('voucher_store');
    SEO.set({ title: 'Grab your Vouchers - ' + Meteor.App.NAME });
  }
});

Router.route('/add_voucher', {
  name: 'add_voucher',
  action: function () {
    this.render('voucher_store_add');
    SEO.set({ title: 'Add Voucher - ' + Meteor.App.NAME });
  }
});
