Meteor.methods({
  customerRegister: function(Obj) {
    check(Obj,customer);


    Accounts.createUser({
    email: Obj.email,
    password: Obj.password,
    profile: {
            name: "",
            phone: Obj.phone,
            rewardpoints: 0,
            moneybalance: 0,
            oldpassword: "",
            image_url:"blank_image.png",
            // 1: customers, 2: retailers, 3: needy
            type: '1',
        }
      });
  }
  ,
  updateProfile: function(obj)
  {
    check(obj,customer);

    Meteor.users.update(Meteor.userId(),{$set:{ "profile.image_url":obj.image_url,"profile.name":obj.name,"profile.phone":obj.phone  }});


  }

});
