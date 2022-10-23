import { Router } from "express";
import {
  addPatient,
  deletePatient,
  editPatient,
  getAllPatients,
} from "../bl/patients.bl.js";
import { validatePatients } from "../validation/validation.js";

const patientRouter = Router();

patientRouter.get("/", async (req, res) => {
  try {
    const patients = await getAllPatients();
    res.send(patients);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

patientRouter.post("/", validatePatients, async (req, res) => {
  try {
    const patient = await addPatient(req.body);
    return res.send(patient);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

patientRouter.put("/", async (req, res) => {
  try {
    const patient = await editPatient(req.body);
    return res.send(patient);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

patientRouter.delete("/", async (req, res) => {
  try {
    const patient = await deletePatient(req.body.id);
    res.send(patient);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default patientRouter;
