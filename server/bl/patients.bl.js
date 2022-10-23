import runQuery from "../dal/index.js";
import { Patient } from "../models/patient.model.js";

export async function getAllPatients() {
  const query = "SELECT * FROM patient";
  try {
    const patients = await runQuery(query);
    console.log(patients);
    return patients.map((data) => new Patient(data));
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addPatient(patient) {
  const query = `INSERT INTO patient (${Object.keys(
    patient
  ).join()}) VALUES(${Object.values(patient)
    .map((p) => "?")
    .join()})`;

  try {
    const newPatient = await runQuery(query, Object.values(patient));
    console.log(newPatient);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function editPatient(patient) {
  const query = `UPDATE patient SET ${Object.keys(patient)
    .map((k) => `${k} = ?`)
    .join()} WHERE id = ${patient.id}`;

  try {
    const updatedPatient = await runQuery(query, Object.values(patient));
    console.log(updatedPatient);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deletePatient(id) {
  const query = "DELETE FROM patient WHERE id = ?;";
  try {
    const res = await runQuery(query, id);
    console.log(res);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}
