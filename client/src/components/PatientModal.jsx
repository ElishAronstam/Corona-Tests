import React from "react";
import { Modal } from "react-bootstrap";

function PatientModal({ patient, show, setShow }) {
  return (
    <Modal
      size="sm"
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          {" "}
          {patient.fullName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>ID: {patient.id}</li>
          <li>Address: {patient.address}</li>
          <li>DOB: {patient.dob}</li>
          <li>Phone Number: {patient.phoneNumber}</li>
          <li>Cell: {patient.cell}</li>
          <li>Date Positive: {patient.datePos}</li>
          <li>Date Negative: {patient.dateNeg}</li>
          <li>First Vax: {patient.vaxDate1}</li>
          <li>Second Vax: {patient.vaxDate2}</li>
          <li>Third Vax: {patient.vaxDate3}</li>
          <li>Fourth Vax: {patient.vaxDate4}</li>
          <li>First Vax Creator: {patient.vaxCreator1}</li>
          <li>Second Vax Creator: {patient.vaxCreator2}</li>
          <li>Third Vax Creator: {patient.vaxCreator3}</li>
          <li>Fourth Vax Creator: {patient.vaxCreator4}</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}

export default PatientModal;
