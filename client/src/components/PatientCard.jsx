import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useDeletePatientMutation } from "../store/apiSlice";
import EditPatient from "./EditPatient";
import PatientModal from "./PatientModal";

function PatientCard({ patient }) {
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [deletePatient] = useDeletePatientMutation();
  const onDeletePatient = (e) => {
    e.preventDefault();
    try {
      deletePatient(patient.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PatientModal show={showModal} setShow={setShowModal} patient={patient} />
      <EditPatient
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        patient={patient}
      />
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{patient.fullName}</Card.Title>
            <Button
              size="sm"
              className="m-1"
              variant="primary"
              onClick={() => setShowModal(true)}
            >
              Details
            </Button>
            <Button
              size="sm"
              className="m-1"
              variant="primary"
              onClick={onDeletePatient}
            >
              Delete
            </Button>
            <Button
              size="sm"
              className="m-1"
              variant="primary"
              onClick={() => setShowEdit(true)}
            >
              Edit
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default PatientCard;
