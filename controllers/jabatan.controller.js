const db = require("../models");
const Jabatan = db.jabatan;
const Department = db.department;

// Create jabatam
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nama_jabatan || !req.body.id_department) {
    res.status(400).send({
      message: "Content can not be empty",
    });
    return;
  }

  const jabatan = {
    nama_jabatan: req.body.nama_jabatan,
    id_department: req.body.id_department,
  };

  Jabatan.create(jabatan)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error",
      });
    });
};

// Find all jabatan
exports.findAll = (req, res) => {
  Jabatan.findAll({
    include: [
      {
        model: Department,
        as: "department",
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error",
      });
    });
};

// Find one jabatan
exports.findOne = (req, res) => {
  const id = req.params.id;

  Jabatan.findByPk(id, {
    include: [
      {
        model: Department,
        as: "department",
      },
    ],
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Jabatan with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error",
      });
    });
};

// Update jabatan
exports.update = (req, res) => {
  const id = req.params.id;

  Jabatan.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Jabatan updated",
        });
      } else {
        res.send({
          message: `Cannot update Jabatan with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Jabatan with id=" + id,
      });
    });
};

// Delete jabatan
exports.delete = (req, res) => {
  const id = req.params.id;

  Jabatan.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Jabatan deleted",
        });
      } else {
        res.send({
          message: `Cannot delete jabatan with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete jabatan",
      });
    });
};
