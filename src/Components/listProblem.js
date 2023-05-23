import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./listProblem.css";
import Swal from "sweetalert2";


const ProblemList = () => {
  const [problemData, setProblemData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/problem')
      .then((response) => {
        const data = response.data;
        setProblemData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteProblem = (problemId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://127.0.0.1:8000/problem/${problemId}`)
          .then((response) => {
            // Log the response if needed
            console.log(response.data);
            // Remove the deleted problem from the state
            setProblemData((prevData) =>
              prevData.filter((problem) => problem.id !== problemId)
            );
            Swal.fire("Deleted!", "The problem has been deleted.", "success");
          })
          .catch((error) => {
            console.error(error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the problem.",
              "error"
            );
          });
      }
    });
  };
  

  return (
    <div className="problem-list-container">
      <h2 className="problem-list-title">Problem List</h2>
      <Link to="/addProblem"style={{ float: 'left', marginRight: '10px' }}>
        <Button variant="primary" size="sm"style={{ borderRadius: '20px' }}>Add Problem</Button>
      </Link>
      {/* <Button variant="primary" className="add-question-btn">
        <Link to="/addProblem" className="link-style">Add Problem</Link>
      </Button> */}
      <div className="problem-list">
        {problemData.map((problem) => (
          <Card key={problem.id} className="problem-card-wide">
            <Card.Body>
              <Card.Title>{problem.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {problem ? problem.dateCreation.date.toString().split(" ")[0] : ""}
              </Card.Subtitle>
              <Card.Text>{problem.content}</Card.Text>
              <Link to={`/listResponse/${problem.id}`} style={{ float: 'left', marginRight: '10px' }}>
                <Button variant="primary" size="sm" style={{ borderRadius: '20px' }}>Solutions</Button>
              </Link>
              <Button
                variant="primary"
                size="sm"
                style={{
                  backgroundColor: "#dc3545",
                  /*borderColor: "#dc3545",
                  marginLeft: "5px",
                  fontSize: "12px",
                  padding: "6px 10px", */
                  borderRadius: "20px",
                }}
                onClick={() => handleDeleteProblem(problem.id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProblemList;
