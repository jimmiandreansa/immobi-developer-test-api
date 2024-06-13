module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define("department", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_department: {
      type: Sequelize.STRING,
    },
  });

  return Department;
};
