const patientService = require('../services/patientService');

const createPatient = async (request, response) => {
  const { displayName, email, password, image } = request.body;

  const token = await patientService.createPatient(displayName, email, password, image);

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

const deletePatient = async (request, response) => {
  const { decodedData } = request;
  
  await patientService.deletePatient(decodedData);
  
  return response.status(204).end();
};
module.exports = {
  createPatient,
  getAll,
  getById,
  deletePatient,
};