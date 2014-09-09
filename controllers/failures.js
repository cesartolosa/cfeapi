var failureModel = require('../models/failure.js');

exports.addFailure = function(req, res) {
  failureModel.create(req.body)
  .then(function(response) {
    if (response == null) {
      res.send({success: false, message: "Ocurrió un error al guardar"});
      throw new Error("Error al guardar");
    }
    else
      res.send({success: true, message: "Se agregó correctamente la falla"});
  })
  .then(undefined, function(err) {
    console.log(err);
    res.send({success: false, message: "Ocurrió un error"});
  });
};

exports.getFailures = function(req, res) {
  failureModel.find().exec()
  .then(function(response) {
    res.send({success: true, failures: response});
  })
  .then(undefined, function(err) {
    console.log(err);
    res.send({success: false, message: "Ocurrió un error"});
  });
}
