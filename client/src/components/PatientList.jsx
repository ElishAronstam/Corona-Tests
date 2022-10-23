import React from "react";
import { Container, Row } from "react-bootstrap";
import { useGetPatientsQuery } from "../store/apiSlice";
import PatientCard from "./PatientCard";

function PatientList() {
  const { data: patientList } = useGetPatientsQuery();

  return (
    <Container>
      <Row xs={1} md={3} className="g-4 m-3">
        {patientList &&
          patientList.map((p) => (
            <PatientCard key={p.id} patient={p}></PatientCard>
          ))}
      </Row>
    </Container>
  );
}

export default PatientList;
