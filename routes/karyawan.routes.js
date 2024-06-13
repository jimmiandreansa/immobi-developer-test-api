module.exports = (app) => {
  const karyawans = require("../controllers/karyawan.controller.js");

  const router = require("express").Router();

  router.post("/", karyawans.create);
  router.get("/", karyawans.findAll);
  router.get("/:id", karyawans.findOne);
  router.put("/:id", karyawans.update);
  router.delete("/:id", karyawans.delete);

  app.use("/api/karyawans", router);
};
