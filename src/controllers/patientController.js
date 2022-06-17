const patientService = require('../services/patientService');

const createPatient = async (request, response) => {
  const {
    firstName, lastName, dateOfBirth, email, address,
  } = request.body;

  const token = await patientService.createPatient(
    firstName,
    lastName,
    dateOfBirth,
    email,
    address,
  );

  response.status(201).json({ token });
};

const getAll = async (_request, response) => {
  const patients = await patientService.getAll();

  return response.status(200).json(patients);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const patients = await patientService.getById(id);

  return response.status(200).json(patients);
};

const updatePatient = async (request, response) => {
  const {
    firstName, lastName, dateOfBirth, email, address,
  } = request.body;

  const { id } = request.params;

  await patientService.updatePatient(id, firstName, lastName, dateOfBirth, email, address);

  return response.status(202).json({ message: 'Patient updated Successfully' });
};

const deletePatient = async (request, response) => {
  const { email } = request.body;

  await patientService.deletePatient(email);

  return response.status(204).end();
};
module.exports = {
  createPatient,
  updatePatient,
  getAll,
  getById,
  deletePatient,
};
