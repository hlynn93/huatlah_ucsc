Meteor.startup(function () {

  var path = process.cwd();
  if(/^win/.test(process.platform)) {
    tmpPath = path + '/../../../../../public/images/people/tmp';
    uploadPath = path + '/../../../../../public/images/people/';
  }
  else {
    // linux hack
  }

  UploadServer.init({

    tmpDir: tmpPath,
    uploadDir: uploadPath,
    checkCreateDirectories: true
  });
});
