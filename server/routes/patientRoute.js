const express = require('express');
const { create_patient, get_patients, patient_details, delete_patient, update_patient } = require('../controllers/patientController');

const router = express.Router();

router.get('/', get_patients)
router.post('/', create_patient);
router.get('/:id', patient_details);
router.delete('/:id', delete_patient);
router.patch('/:id', update_patient);


module.exports = router;
