const Patients = (sequelize, DataTypes) => {
  const patient = sequelize.define("Patients", {
    name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    email: DataTypes.STRING,
    address: DataTypes.STRING
  });

  return patient;
};

module.exports = Patients;
