const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const diagnosisSchema = Schema({
    icd: {
        type: String,
        required: true
    },
    description: String
})

const patientSchema = Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        reuqired: true
    },
    date_of_procedure: {
        type: Date,
        required: true
    },
    expected_discharge_date: {
        type: Date,
        required: true
    },
    diagnosis: {
        type: diagnosisSchema,
        required: true
    },
    procedure: {
        type: String,
        required: true
    },
    co: [{
        type: String
    }],
    pulse: Number,
    bp: Number,
    rr: Number,
    tpr: Number,
    spo2: Number,
    intake: Number,
    ouput: Number,
    drain: Number,
    doctor_order: String 
}, {timestamps: true})

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;