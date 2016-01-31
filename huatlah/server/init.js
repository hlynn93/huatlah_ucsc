Meteor.startup(function () {

  var path = process.cwd();
  if(/^win/.test(process.platform)) {
    // tmpPath = path + '/../../../../../public/images/people/tmp';
    // uploadPath = path + '/../../../../../public/images/people/';
    tmpPath = path + '/../../../../../.uploads/tmp';
    uploadPath = path + '/../../../../../.uploads/';
  }
  else {
    tmpPath = process.env.PWD + '/.uploads/tmp';
    uploadPath = process.env.PWD + '/.uploads//';
  }

  UploadServer.init({

    tmpDir: tmpPath,
    uploadDir: uploadPath,
    checkCreateDirectories: true
  });
});
