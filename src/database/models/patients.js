const Patients = (sequelize, DataTypes) => {
  const patient = sequelize.define('Patients', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    date_of_birth: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
  });

  return patient;
};

module.exports = Patients;
