module.exports = (sequelize, Sequelize) => {
  const Jabatan = sequelize.define("jabatan", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_department: {
      type: Sequelize.INTEGER,
    },
    nama_jabatan: {
      type: Sequelize.STRING,
    },
  });

  return Jabatan;
};
