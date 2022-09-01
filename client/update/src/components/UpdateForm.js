import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Field, Form, Formik, useField } from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';
import { Button, FormControlLabel, FormLabel, Grid, Radio } from '@mui/material';
import TextField from '@mui/material/TextField';

import { UserContext } from '../contexts/UserContext';

const GenderRadio = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <FormControlLabel {...field} control={<Radio />} label={label} />
  )
}

const UpdateForm = () => {

  const [patient, setPatient] = useState({});
  const [loading, setLoading] = useState(false);
  
  const params = useParams();
  const id = params.id;

  const user = useContext(UserContext);

  useEffect(() => {
    const fetchPatient = async () => {
      setLoading(true);
      const response = await fetch(`/api/patients/${id}`);
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setPatient(json);
        setLoading(false);
      }
    }

    fetchPatient();
  }, [])

  const initialValues = {
    name: patient.name,
    age: patient.age,
    gender: patient.gender,
    date_of_procedure: dayjs(patient.date_of_procedure).format("YYYY-MM-DD"),
    expected_discharge_date: dayjs(patient.expected_discharge_date).format("YYYY-MM-DD"),
    // diagnosis: {
    //   icd: patient.diagnosis.icd,
    //   description: patient.diagnosis.description ? patient.diagnosis.description : ""
    // },
    procedure: patient.procedure,
    co: patient.co,
    pulse: patient.pulse,
    bp: patient.bp,
    rr: patient.rr,
    tpr: patient.tpr,
    spo2: patient.spo2,
    intake: patient.intake,
    output: patient.output,
    drain: patient.drain,
    doctor_order: patient.doctor_order
  }

  const formValidation = yup.object({

  })

  if (loading) {
    return (
      <div>Getting Patient Details.....</div>
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidation}
      onSubmit={values => console.log(values)}
    >
      {({ values }) => (
        <Form>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Field label="Patient Name" name="name" as={TextField} />
            </Grid>

            <Grid item xs={6}>
              <Field label="Patient Age" type="number" name="age" as={TextField} />
            </Grid>

            <Grid item xs={6}>
              <div>
                <FormLabel>Gender</FormLabel>
              </div>
              <GenderRadio name="gender" type="radio" value="F" label="Female" />
              <GenderRadio name="gender" type="radio" value="M" label="Male" />
              <GenderRadio name="gender" type="radio" value="O" label="Other" />
            </Grid>

            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>

            <Grid item xs={6}>
              <Field type="date" label="Expected Discharge Date" name="expected_discharge_date" as={TextField} />
            </Grid>

            {/* <Grid item xs={6}>
              <Field label="ICD of Procedure" name="diagnosis.icd" as={TextField} />
              <p>{patient.diagnosis.icd}</p>
            </Grid>

            <Grid item xs={6}>
              <Field label="Description of Procedure" name="diagnosis.description" as={TextField} />
            </Grid> */}

            <Grid item xs={6}>
              <Field multiline label="Procedure" name="procedure" as={TextField} />
            </Grid>

            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>

            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="pulse" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>
            <Grid item xs={6}>
              <Field type="date" label="Date of Procedure" name="date_of_procedure" as={TextField} />
            </Grid>

            <Grid item xs={12}>
              <Button type='submit'>Save Changes</Button>
            </Grid>

          </Grid>
          <pre>{JSON.stringify(values, null, 2)}</pre>

        </Form>
      )}
    </Formik>
  )
}

export default UpdateForm