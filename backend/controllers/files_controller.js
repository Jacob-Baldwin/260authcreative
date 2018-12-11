var crypto = require('crypto');
var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    File = mongoose.model('File');
var path = require('path');

exports.getFiles = function(req, res) {
  File.find({ owner: req.session.user })
  .exec(function(err, files) {
    if (!files){
      res.json(404, {err: 'User Not Found.'});
    } else {
      res.json(files);
    }
  });
};

exports.upload = function(req, res, next) {
  let file = req.files.fileupload;
  let body = req.body;

  // remove whitespace and upper case letters from the filename
  let filename = file.name.toLowerCase().replace(/ /g,'');


  file.mv(`files/${filename}`, function(err) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    else {
      var filerecord = new File({
        displayname: file.name,
        filename: filename,
        owner: req.session.user
      });

      console.log(filerecord);

      filerecord.save(function(err) {
        if (err){
          console.log(err);
          res.session.error = err;
          res.status(403).send(err);
        } else {
          res.status(200).send(filerecord);
        }
      });
    }
  });
};

exports.download = function(req, res, next) {
  console.log("in download function");
  path = path.join(__dirname, "../../files", req.params.filename);
  console.log(path);
  res.sendFile(path);
};
