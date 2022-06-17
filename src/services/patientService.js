const { Patients } = require('../database/models');
const createError = require('../utils/createError');

const getByEmail = async (email) => {
  const patient = await Patients.findOne({
    where: {
      email,
    },
  });

  return patient;
};

const getById = async (id) => {
  const patient = await Patients.findByPk(id, {
    attributes: {
    },
  });

  if (!patient) throw createError(404, 'Patient does not exist');

  return patient;
};

const getAll = async () => {
  const patient = await Patients.findAll();

  return patient;
};

const createPatient = async (name, dateOfBirth, email, address) => {
  const foundPatient = await getByEmail(email);

  if (foundPatient) throw createError(409, 'Patient already registered');

  await Patients.create({
    name,
    date_of_birth: dateOfBirth,
    email,
    address,
  });
};

const updatePatient = async (name, dateOfBirth, email, address) => {
  const foundPatient = await getByEmail(email);

  if (!foundPatient) throw createError(409, 'Patient not Found!');

  await Patients.upsert({
    id: foundPatient.id,
    name,
    date_of_birth: dateOfBirth,
    email,
    address,
  });
};

const deletePatient = async (email) => {
  const patient = await getByEmail(email);

  await Patients.destroy({
    where: {
      id: patient.id,
    },
  });
};

module.exports = {
  createPatient,
  updatePatient,
  getAll,
  getById,
  getByEmail,
  deletePatient,
};
