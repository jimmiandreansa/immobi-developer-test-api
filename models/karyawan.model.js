module.exports = (sequelize, Sequelize) => {
  const Karyawan = sequelize.define("karyawan", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    id_jabatan: {
      type: Sequelize.INTEGER,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    gender: {
      type: Sequelize.CHAR(1),
    },
    tanggal_lahir: {
      type: Sequelize.DATE,
    },
    alamat: {
      type: Sequelize.TEXT,
    },
  });

  return Karyawan;
};
