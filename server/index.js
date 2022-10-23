import express, { json, urlencoded } from "express";
import { config } from "dotenv";
import patientRouter from "./controllers/patients.ctrl.js";
config();
const server = express();

server.use(express.static("public"));
server.use(json());
server.use(urlencoded({ extended: true }));


server.use("/api/patients", patientRouter);
server.listen(process.env.PORT, () =>
  console.log(`served on PORT ${process.env.PORT}`)
);
