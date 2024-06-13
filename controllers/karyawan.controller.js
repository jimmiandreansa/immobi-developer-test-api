const db = require("../models");
const Karyawan = db.karyawan;
const Jabatan = db.jabatan;
const Department = db.department;

// Create karyawan
exports.create = (req, res) => {
  if (
    !req.body.name ||
    !req.body.id_jabatan ||
    !req.body.age ||
    !req.body.gender ||
    !req.body.tanggal_lahir ||
    !req.body.alamat
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const karyawan = {
    name: req.body.name,
    id_jabatan: req.body.id_jabatan,
    age: req.body.age,
    gender: req.body.gender,
    tanggal_lahir: req.body.tanggal_lahir,
    alamat: req.body.alamat,
  };

  Karyawan.create(karyawan)
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

// Find all karyawan
exports.findAll = (req, res) => {
  Karyawan.findAll({
    include: [
      {
        model: Jabatan,
        as: "jabatan",
        include: [
          {
            model: Department,
            as: "department",
          },
        ],
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

// Find one karyawan
exports.findOne = (req, res) => {
  const id = req.params.id;

  Karyawan.findByPk(id, {
    include: [
      {
        model: Jabatan,
        as: "jabatan",
        include: [
          {
            model: Department,
            as: "department",
          },
        ],
      },
    ],
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Karyawan with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error",
      });
    });
};

// Update karyawan
exports.update = (req, res) => {
  const id = req.params.id;

  Karyawan.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Karyawan updated",
        });
      } else {
        res.send({
          message: `Cannot update Karyawan with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating karyawan",
      });
    });
};

// Delete karyawan
exports.delete = (req, res) => {
  const id = req.params.id;

  Karyawan.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Karyawan deleted",
        });
      } else {
        res.send({
          message: `Cannot delete Karyawan with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete karyawan",
      });
    });
};
