import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAddPatientMutation } from "../store/apiSlice";

function AddPatient() {
  const [patient, setPatient] = useState({});
  const navigate = useNavigate();
  const [addPatient] = useAddPatientMutation();

  const onPatientSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addPatient(patient).unwrap();

      if (res) {
        alert("Patient Succesfully Added!");
        navigate("/", { replace: true });
      }
    } catch (error) {
      if (error.originalStatus === 400) {
        alert(error.data);
      } else alert("Unable to add patient! Please Try again!");
    }
  };
  return (
    <Form className="m-3" onSubmit={onPatientSubmit}>
      <Form.Group className="mb-3" controlId="fullname">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) =>
            setPatient({ ...patient, full_name: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="id">
        <Form.Label>Id</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setPatient({ ...patient, id: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setPatient({ ...patient, address: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dob">
        <Form.Label>dob</Form.Label>
        <Form.Control
          type="datetime-local"
          onChange={(e) => setPatient({ ...patient, dob: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          onChange={(e) =>
            setPatient({ ...patient, phone_number: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cell">
        <Form.Label>Cell</Form.Label>
        <Form.Control
          type="tel"
          onChange={(e) => setPatient({ ...patient, cell: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="datePos">
        <Form.Label>Date Positive</Form.Label>
        <Form.Control
          type="datetime-local"
          onChange={(e) => setPatient({ ...patient, date_pos: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateNeg">
        <Form.Label>Date Negative</Form.Label>
        <Form.Control
          type="datetime-local"
          onChange={(e) => setPatient({ ...patient, date_neg: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="vaxDate1">
        <Form.Label>vaxDate1</Form.Label>
        <Form.Control
          type="datetime-local"
          onChange={(e) =>
            setPatient({ ...patient, vax_date1: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="vaxDate2">
        <Form.Label>vaxDate2</Form.Label>
        <Form.Control
          type="datetime-local"
          onChange={(e) =>
            setPatient({ ...patient, vax_date2: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="vaxDate3">
        <Form.Label>vaxDate3</Form.Label>
        <Form.Control
          type="datetime-local"
          onChange={(e) =>
            setPatient({ ...patient, vax_date3: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="vaxDate4">
        <Form.Label>vaxDate4</Form.Label>
        <Form.Control
          type="datetime-local"
          onChange={(e) =>
            setPatient({ ...patient, vax_date4: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="vaxCreator1">
        <Form.Label>vaxCreator1</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) =>
            setPatient({ ...patient, vax_creator1: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="vaxCreator2">
        <Form.Label>vaxCreator2</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) =>
            setPatient({ ...patient, vax_creator2: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="vaxCreator3">
        <Form.Label>vaxCreator3</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) =>
            setPatient({ ...patient, vax_creator3: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="vaxCreator4">
        <Form.Label>vaxCreator4</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) =>
            setPatient({ ...patient, vax_creator4: e.target.value })
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default AddPatient;
