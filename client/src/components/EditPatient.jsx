import React, { useState } from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEditPatientMutation } from "../store/apiSlice";

function EditPatient({ patient, showEdit, setShowEdit }) {
  const [editedPatient, setEditedPatient] = useState({});
  const navigate = useNavigate();
  const [editPatient, { data }] = useEditPatientMutation();

  const onPatientEdit = (e) => {
    e.preventDefault();
    try {
      editPatient({ ...editedPatient, id: patient.id });
      navigate("/", { replace: true });
      if (data) {
        alert("Patient Succesfully Updated!");
      }
    } catch (error) {
      alert("Unable to update patient! Please Try again!");
      console.log(error);
    }
  };
  return (
    <Offcanvas show={showEdit} onHide={() => setShowEdit(false)}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form className="m-3" onSubmit={onPatientEdit}>
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Text className="text-muted">{patient.fullName} </Form.Text>
            <Form.Control
              type="text"
              onChange={(e) =>
                setEditedPatient({
                  ...editedPatient,
                  full_name: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Text className="text-muted">{patient.address} </Form.Text>

            <Form.Control
              type="text"
              onChange={(e) =>
                setEditedPatient({ ...editedPatient, address: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="dob">
            <Form.Label>dob</Form.Label>
            <Form.Text className="text-muted">{patient.dob} </Form.Text>

            <Form.Control
              type="datetime-local"
              onChange={(e) =>
                setEditedPatient({ ...editedPatient, dob: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Text className="text-muted">{patient.phoneNumber} </Form.Text>

            <Form.Control
              type="tel"
              onChange={(e) =>
                setEditedPatient({
                  ...editedPatient,
                  phone_number: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cell">
            <Form.Label>Cell</Form.Label>
            <Form.Text className="text-muted">{patient.cell} </Form.Text>

            <Form.Control
              placeholder={patient.cell}
              type="tel"
              onChange={(e) =>
                setEditedPatient({ ...editedPatient, cell: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="datePos">
            <Form.Label>Date Positive</Form.Label>
            <Form.Text className="text-muted">{patient.datePos} </Form.Text>

            <Form.Control
              placeholder={patient.datePos}
              type="datetime-local"
              onChange={(e) =>
                setEditedPatient({ ...editedPatient, date_pos: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="dateNeg">
            <Form.Label>Date Negative</Form.Label>
            <Form.Text className="text-muted">{patient.dateNeg} </Form.Text>

            <Form.Control
              placeholder={patient.dateNeg}
              type="datetime-local"
              onChange={(e) =>
                setEditedPatient({ ...editedPatient, date_neg: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="vaxDate1">
            <Form.Label>vaxDate1</Form.Label>
            <Form.Text className="text-muted">{patient.vaxdate1} </Form.Text>

            <Form.Control
              placeholder={patient.vaxdate1}
              type="datetime-local"
              onChange={(e) =>
                setEditedPatient({
                  ...editedPatient,
                  vax_date1: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="vaxDate2">
            <Form.Label>vaxDate2</Form.Label>
            <Form.Text className="text-muted">{patient.vaxDate2} </Form.Text>

            <Form.Control
              placeholder={patient.vaxDate2}
              type="datetime-local"
              onChange={(e) =>
                setEditedPatient({
                  ...editedPatient,
                  vax_date2: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="vaxDate3">
            <Form.Label>vaxDate3</Form.Label>
            <Form.Text className="text-muted">{patient.vaxDate3} </Form.Text>

            <Form.Control
              placeholder={patient.vaxDate3}
              type="datetime-local"
              onChange={(e) =>
                setEditedPatient({
                  ...editedPatient,
                  vax_date3: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="vaxDate4">
            <Form.Label>vaxDate4</Form.Label>
            <Form.Text className="text-muted">{patient.vaxDate4} </Form.Text>

            <Form.Control
              placeholder={patient.vaxDate4}
              type="datetime-local"
              onChange={(e) =>
                setEditedPatient({
                  ...editedPatient,
                  vax_date4: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="vaxCreator1">
            <Form.Label>vaxCreator1</Form.Label>
            <Form.Text className="text-muted">{patient.vaxCreator1} </Form.Text>

            <Form.Control
              placeholder={patient.vaxCreator1}
              type="text"
              onChange={(e) =>
                setEditedPatient({
                  ...editedPatient,
                  vax_creator1: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="vaxCreator2">
            <Form.Label>
              vaxCreator2
              <Form.Text className="text-muted">
                {patient.vaxCreator2}
              </Form.Text>
            </Form.Label>

            <Form.Control
              placeholder={patient.vaxCreator2}
              type="text"
              onChange={(e) =>
                setEditedPatient({
                  ...editedPatient,
                  vax_creator2: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="vaxCreator3">
            <Form.Label>
              vaxCreator3{" "}
              <Form.Text className="text-muted">
                {patient.vaxCreator3}{" "}
              </Form.Text>
            </Form.Label>
            <Form.Control
              placeholder={patient.vaxCreator3}
              type="text"
              onChange={(e) =>
                setEditedPatient({
                  ...editedPatient,
                  vax_creator3: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="vaxCreator4">
            <Form.Label>
              vaxCreator4{" "}
              <Form.Text className="text-muted">
                {patient.vaxCreator4}{" "}
              </Form.Text>
            </Form.Label>
            <Form.Control
              placeholder={patient.vaxCreator4}
              type="text"
              onChange={(e) =>
                setEditedPatient({
                  ...editedPatient,
                  vax_creator4: e.target.value,
                })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default EditPatient;
