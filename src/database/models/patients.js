const Patients = (sequelize, DataTypes) => {
  const patients = sequelize.define('Patients', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
  });

  return patients;
};

module.exports = Patients;
