var reportModel = require('../models/report.js');

exports.sendReport = function(req, res) {
  reportModel.create(req.body)
  .then(function(response) {
    if (response == null) {
      res.send({success: false, message: "Ocurrió un error al enviar el reporte"});
      throw new Error("Error al guardar");
    }
    else
      res.send({success: true, message: "Se envío correctamente el reporte"});
  })
  .then(undefined, function(err) {
    console.log(err);
    res.send({success: false, message: "Ocurrió un error"});
  });
};

exports.getReports = function(req, res) {
  reportModel.find().populate('type').exec()
  .then(function(response) {
    res.send({success: true, reports: response});
  })
  .then(undefined, function(err) {
    console.log(err);
    res.send({success: false, message: "Ocurrió un error"});
  });
}
