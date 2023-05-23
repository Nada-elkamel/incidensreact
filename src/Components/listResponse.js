import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./listProblem.css";

const ResponseList = () => {
  const [responseList, setResponseList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/solution?problem=${id}`)
      .then((response) => {
        const data = response.data;
        setResponseList(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const deleteResponse = (responseId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this response!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://127.0.0.1:8000/solution/${responseId}`)
          .then((response) => {
            console.log("Response deleted successfully");
            setResponseList(responseList.filter((response) => response.id !== responseId));
          })
          .catch((error) => {
            console.error(error);
          });
        Swal.fire("Deleted!", "The response has been deleted.", "success");
      }
    });
  };

  return (
    <div className="problem-list-container">
      <h2 className="problem-list-title">Solutions List</h2>
      <Link to={`/addsolution/${id}`} style={{ float: 'left', marginRight: '10px' }}>
        <Button variant="primary" size="sm" style={{ borderRadius: '20px' }}>
          Add Solution
        </Button>
      </Link>

      <Link to="/listProblem" style={{ float: 'left', marginRight: '10px' }}>
        <Button variant="info" style={{ borderRadius: '20px' }}>Back to Problems</Button>
      </Link>

      <div className="problem-list">
        {responseList.length === 0 ? (
          <Card className="problem-card-wide" >
            <Card.Body>
              <Card.Text>No response was found.</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          responseList.map((response) => (
            <Card key={response.id} className="problem-card-wide">
              <Card.Body>
               {/*  <Card.Title>{response.developer}</Card.Title> */}
                <Card.Subtitle className="mb-2 text-muted">
                  {response.dateCreation.date.split(" ")[0]}
                </Card.Subtitle>
                <Card.Text>{response.contentS}</Card.Text>
                <Button
                  variant="danger"
                  style={{ borderRadius: '20px' }}
                  onClick={() => deleteResponse(response.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ResponseList;
