const db = require("../models");
const Department = db.department;

// Create departement
exports.create = (req, res) => {
  if (!req.body.nama_department) {
    res.status(400).send({
      message: "Department name can not be empty",
    });
    return;
  }

  const department = {
    nama_department: req.body.nama_department,
  };

  Department.create(department)
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

// Get all departments
exports.findAll = (req, res) => {
  Department.findAll()
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

// Find one department
exports.findOne = (req, res) => {
  const id = req.params.id;

  Department.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find department with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error department with id=" + id,
      });
    });
};

// Update department
exports.update = (req, res) => {
  const id = req.params.id;

  Department.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Department update succesfully",
        });
      } else {
        res.send({
          message: `Cannot update department with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating department",
      });
    });
};

// Delete department
exports.delete = (req, res) => {
  const id = req.params.id;

  Department.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Department deleted",
        });
      } else {
        res.send({
          message: `Cannot delete Department with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete department",
      });
    });
};
