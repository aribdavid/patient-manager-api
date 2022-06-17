const express = require('express');

const rescue = require('express-rescue');
const patientController = require('../controllers/patientController');

const router = express.Router();

router.get('/patient', rescue(patientController.getAll));
router.put('/patient/:id', rescue(patientController.updatePatient));
router.post('/patient', rescue(patientController.createPatient));
router.get('/patient/:id', rescue(patientController.getById));
router.delete('/patient/me', rescue(patientController.deletePatient));
module.exports = router;
