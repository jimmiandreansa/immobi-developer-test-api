const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: dbConfig.pool,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.department = require("./department.model.js")(sequelize, Sequelize);
db.jabatan = require("./jabatan.model.js")(sequelize, Sequelize);
db.karyawan = require("./karyawan.model.js")(sequelize, Sequelize);

db.department.hasMany(db.jabatan, { foreignKey: "id_department" });
db.jabatan.belongsTo(db.department, { foreignKey: "id_department" });
db.jabatan.hasMany(db.karyawan, { foreignKey: "id_jabatan" });
db.karyawan.belongsTo(db.jabatan, { foreignKey: "id_jabatan" });

module.exports = db;
