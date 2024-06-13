module.exports = (app) => {
  const jabatans = require("../controllers/jabatan.controller.js");

  const router = require("express").Router();

  router.post("/", jabatans.create);
  router.get("/", jabatans.findAll);
  router.get("/:id", jabatans.findOne);
  router.put("/:id", jabatans.update);
  router.delete("/:id", jabatans.delete);

  app.use("/api/jabatans", router);
};
