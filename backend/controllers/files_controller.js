var crypto = require('crypto');
var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    File = mongoose.model('File');

exports.getFiles = function(req, res) {
  File.find({ owner: req.session.user._id })
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
  console.log("File");
  console.log(file);
  let body = req.body;

  file.mv(`build/${file.name}`, function(err) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    else {
      var filerecord = new File({filename: file.name});

      filerecord.owner = req.session.user._id;

      filerecord.save(function(err) {
        console.log(err);
        if (err){
          res.session.error = err;
          res.status(403).send(err);
        } else {
          res.status(200).send(filerecord);
        }
      });
    }
  });
};

