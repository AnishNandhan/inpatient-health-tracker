const Patient = require('../models/PatientModel');
const mongoose = require('mongoose');

// create patient details
const create_patient = async (req, res) => {
  const doc = req.body;

  try {
    const patient = new Patient(doc);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}

// get all patients
const get_patients = async (req, res) => {
  const patients = await Patient.find();
  res.status(200).json(patients);
}

// get single patient details
const patient_details = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such object' });
  }

  const patient = await Patient.findById(req.params.id);

  if (!patient) {
    return res.status(404).json({ error: 'No such object' });
  }

  res.status(200).json(patient);
}

// delete patient
const delete_patient = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such oject' });
  }

  const doc = await Patient.findOneAndDelete({ _id: id });

  if (!doc) {
    return res.status(400).json({ error: 'No such object found' });
  }

  res.status(200).json(doc);
}

// update patient details
const update_patient = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'No such object found' });
  }

  const doc = await Patient.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!doc) {
    res.status(400).json({ error: 'No such object found' });
  }

  res.status(200).json(doc);
}

module.exports = {
  create_patient,
  get_patients,
  patient_details,
  delete_patient,
  update_patient
}
